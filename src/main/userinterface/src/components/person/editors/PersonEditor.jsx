import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';

const PersonEditor = ({
	selectedPerson,
	selectedPerson: {
		personId,
		personSurName,
		personGivenName,
		personMaidenName,
		personMiddleName,
		personBirthDate,
		personSexCode,
		personPrimaryLanguage,
		personSecondaryLanguage,
		wheelchair,
		licenseNumber,
		licenseProvince,
	},
	reloadPersons,
}) => {
	const [person, setPerson] = useState(selectedPerson);
	const [updated, setUpdated] = useState(false);

	useState(console.log(person), function test() {
		console.log('unmount' + JSON.stringify(person));
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (!updated) {
			setUpdated(true);
		}
		setPerson({
			...person,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${API_BASE_URL}/api/user/v1/person/update`, person)
			.then((res) => {
				console.log(res);
				setUpdated(false);
				reloadPersons();
			});

		// onSelect(null, 'person');
	};

	return (
		<form onSubmit={handleSubmit} className='editor form-secondary'>
			<h2>Person Info</h2>
			<label className='label-main'>
				Middle Name
				<input
					type='text'
					className='input-secondary'
					name='personMiddleName'
					value={person.personMiddleName}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Maiden Name
				<input
					type='text'
					className='input-secondary'
					name='personMaidenName'
					value={person.personMaidenName}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Birth Date
				<input
					type='date'
					className='date'
					name='personBirthDate'
					value={person.personBirthDate}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Gender
				<select
					className='select-secondary'
					name='personSexCode'
					value={person.personSexCode}
					onChange={handleChange}
				>
					<option value=' '> </option>
					<option value='M'>Male</option>
					<option value='F'>Female</option>
					<option value='X'>Other</option>
				</select>
			</label>
			<label className='label-main'>
				Primary Language
				<input
					type='text'
					className='input-secondary'
					name='personPrimaryLanguage'
					value={person.personPrimaryLanguage}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Secondary Language
				<input
					type='text'
					className='input-secondary'
					name='personSecondaryLanguage'
					value={person.personSecondaryLanguage}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Wheelchair required?
				<select
					className='select-secondary'
					name='wheelchair'
					value={person.wheelchair}
					onChange={handleChange}
				>
					<option value=''> </option>
					<option value={1}>Yes</option>
					<option value={0}>No</option>
				</select>
			</label>
			<label className='label-main'>
				license Number
				<input
					type='text'
					className='input-secondary'
					name='licenseNumber'
					value={person.licenseNumber}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				license Province
				<input
					type='text'
					className='input-secondary'
					name='licenseProvince'
					value={person.licenseProvince}
					onChange={handleChange}
				/>
			</label>
			{updated && (
				<button type='submit' className='button-main'>
					Save
				</button>
			)}
		</form>
	);
};

export default PersonEditor;
