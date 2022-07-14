import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';
import { API_BASE_URL } from '../../constants';

const relationshipOptions = [
	{
		value: 'Child',
		label: 'Child',
	},
	{
		value: 'Dependant',
		label: 'Dependant',
	},
	{
		value: 'Spouse/Partner',
		label: 'Spouse/Partner',
	},
];

const customStyle = {
	container: (provided) => ({
		...provided,
		width: '100%',
		marginTop: '0.5rem',
		fontWeight: 'normal',
	}),
	control: (provided, state) => ({
		...provided,
		border: 'solid 3px #4f76e8',
		borderRadius: 'none',
		boxShadow: 'none',
		height: '70px',
		'&:hover': {
			borderColor: '#4f76e8',
		},
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: 'none',
	}),
	option: (provided, state) => ({
		...provided,
		borderRadius: 'none',
		backgroundColor: state.isSelected ? '#4f76e8' : 'white',
		textAlign: 'left',
		'&:hover': {
			backgroundColor: '#e1e1e1',
		},
	}),
	valueContainer: (provided, state) => ({
		...provided,
		overflow: 'hidden',
		padding: 'none',
		justifyContent: 'left',
		color: 'black',
	}),
	singleValue: (provided) => ({
		...provided,
		color: 'black',
		paddingLeft: '15px',
	}),
	placeholder: (provided) => ({
		...provided,
		paddingLeft: '15px',
	}),
	input: (provided) => ({
		...provided,
		color: 'black',
		paddingLeft: '15px',
	}),
};

const styleSelect = {};

const PersonForm = ({ userId, reloadPersons }) => {
	const [data, setData] = useState({
		userId: userId,
		personGivenName: '',
		personSurName: '',
		personRelationship: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleChangeSelect = (item) => {
		if (item === null) {
			setData({ ...data, personRelationship: null });
			return;
		}
		const { value } = item;
		setData({
			...data,
			personRelationship: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			data.personGivenName !== '' &&
			data.personSurName !== '' &&
			data.personRelationship !== null
		) {
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
							personRelationship: null,
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
				<Select
					options={relationshipOptions}
					//className='select-main'
					isClearable={true}
					onChange={(item) => {
						console.log(item);
						handleChangeSelect(item);
					}}
					isSearchable={false}
					styles={customStyle}
					value={
						data.personRelationship
							? {
									value: data.personRelationship,
									label: data.personRelationship,
							  }
							: null
					}
				/>
				{/* <select
					onChange={handleChange}
					value={data.personRelationship}
					name='personRelationship'
					className='select-main'
				>
					<option value='Child'>Child (18 or younger)</option>
					<option value='Dependant'>Dependant</option>
					<option value='Spouse/Partner'>Spouse/Partner</option>
				</select> */}
			</label>
			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default PersonForm;
