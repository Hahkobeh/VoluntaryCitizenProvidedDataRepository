import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../constants';

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
	onSelect,
}) => {
	const [person, setPerson] = useState(selectedPerson);

	useState(console.log(person), function test() {
		console.log('unmount' + JSON.stringify(person));
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
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
			});

		// onSelect(null, 'person');
	};

	return (
		<div className='editor person-editor'>
			<h1>
				{personGivenName} {personSurName}
			</h1>
			<form onSubmit={handleSubmit}>
				<label className='info-label'>
					Middle Name
					<input
						type='text'
						name='personMiddleName'
						value={personMiddleName}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					Maiden Name
					<input
						type='text'
						name='personMaidenName'
						value={personMaidenName}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					Birth Date
					<input
						type='date'
						name='personBirthDate'
						value={personBirthDate}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					Gender
					<select
						name='personSexCode'
						value={personSexCode}
						onChange={handleChange}
					>
						<option value=' '> </option>
						<option value='M'>Male</option>
						<option value='F'>Female</option>
						<option value='X'>Other</option>
					</select>
				</label>
				<label className='info-label'>
					Primary Language
					<input
						type='text'
						name='personPrimaryLanguage'
						value={personPrimaryLanguage}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					Secondary Language
					<input
						type='text'
						name='personSecondaryLanguage'
						value={personSecondaryLanguage}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					Wheelchair required?
					<select
						name='wheelchair'
						value={wheelchair}
						onChange={handleChange}
					>
						<option value=''> </option>
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
				</label>
				<label className='info-label'>
					license Number
					<input
						type='text'
						name='licenseNumber'
						value={licenseNumber}
						onChange={handleChange}
					/>
				</label>
				<label className='info-label'>
					license Province
					<input
						type='text'
						name='licenseProvince'
						value={licenseProvince}
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>Save</button>
			</form>

			<button onClick={() => onSelect(null, 'person')}>Return</button>
		</div>
	);
};

export default PersonEditor;
