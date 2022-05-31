import axios from 'axios';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../constants';

const PersonForm = ({ userId, reloadPersons }) => {
	const [data, setData] = useState({
		userId: userId,
		personGivenName: '',
		personSurName: '',
		personRelationship: 'Parent',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.personGivenName !== '' && data.personSurName !== '') {
			axios
				.post(`${API_BASE_URL}/api/user/v1/person/create`, {
					userId: data.userId,
					personGivenName:
						data.personGivenName.charAt(0).toUpperCase() +
						data.personGivenName.slice(1).toLowerCase(),
					personSurName:
						data.personSurName.charAt(0).toUpperCase() +
						data.personSurName.slice(1).toLowerCase(),
					personRelationship: data.personRelationship,
				})
				.then((r) => {
					if (r !== null) {
						setData({
							...data,
							personGivenName: '',
							personSurName: '',
							personRelationship: 'Parent',
						});

						reloadPersons();
					}
				});
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form-main profile-form'>
			<h1>Add Person</h1>
			<label className='label-main'>
				Given Name
				<input
					type='text'
					className='input-main'
					name='personGivenName'
					onChange={handleChange}
					value={data.personGivenName}
				/>
			</label>
			<label className='label-main'>
				Sur Name
				<input
					type='text'
					className='input-main'
					name='personSurName'
					onChange={handleChange}
					value={data.personSurName}
				/>
			</label>
			<label className='label-main'>
				Relationship
				<select
					onChange={handleChange}
					value={data.personRelationship}
					name='personRelationship'
					className='select-main'
				>
					<option value='Parent'>Parent</option>
					<option value='Child'>Child</option>
					<option value='Sibling'>Sibling</option>
					<option value='Dependant'>Dependant</option>
					<option value='Grandparent'>Grandparent</option>
					<option value='Other'>Other</option>
				</select>
			</label>
			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default PersonForm;
