import axios from 'axios';
import React, { useState } from 'react';
import { API_BASE_URL, colours, provincesList } from '../../constants';
import Select from 'react-select';

const customStyle = {
	container: (provided) => ({
		...provided,
		width: '100%',
		fontWeight: 'normal',
	}),
	control: (provided, state) => ({
		...provided,
		border: 'solid 3px #4f76e8',
		borderRadius: 'none',
		boxShadow: 'none',
		fontSize: '2rem',
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
		fontSize: '2rem',
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

const provinceOptions = provincesList.map((province) => ({
	value: province.code,
	label: province.name,
}));

const colourOptions = colours.map((colour) => ({
	value: colour,
	label: colour,
}));

const yearOptions = Array.from({ length: 123 }, (e, i) => ({
	value: JSON.stringify(i + 1900),
	label: JSON.stringify(i + 1900),
}));

const VehiclesForm = ({ userId, reloadVehicles }) => {
	const [data, setData] = useState({
		userId: userId,
		registrationPlateIdentification: '',
		provinceCode: '',
		vehicleExteriorColour: '',
		vehicleMake: '',
		vehicleModel: '',
		year: '',
	});

	console.log(yearOptions);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			data.registrationPlateIdentification === '' ||
			isNaN(parseInt(data.year))
		)
			return;
		axios
			.post(`${API_BASE_URL}/api/user/v1/vehicle/create`, {
				...data,
				year: parseInt(data.year),
				registrationPlateIdentification:
					data.registrationPlateIdentification.replace(/\s/g, ''),
			})
			.then((r) => {
				if (r !== null) {
					setData({
						userId: userId,
						registrationPlateIdentification: '',
						provinceCode: '',
						vehicleExteriorColour: '',
						vehicleMake: '',
						vehicleModel: '',
						year: '',
					});

					reloadVehicles();
				}
			});
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='form-main profile-form smaller'
		>
			<h1>Add Vehicle</h1>
			<label className='label-main'>
				License Plate
				<input
					type='text'
					className='input-main'
					name='registrationPlateIdentification'
					onChange={handleChange}
					value={data.registrationPlateIdentification}
				/>
			</label>
			<label className='label-main'>
				Province
				{/* <input
					type='text'
					className='input-main'
					name='provinceCode'
					onChange={handleChange}
					value={data.provinceCode}
				/> */}
				<Select
					options={provinceOptions}
					isClearable={true}
					value={provinceOptions.filter(
						(option) => option.value === data.provinceCode
					)}
					onChange={(item) =>
						setData({
							...data,
							provinceCode: item ? item.value : null,
						})
					}
					styles={customStyle}
				/>
			</label>

			<label className='label-main'>
				Make
				<input
					type='text'
					className='input-main'
					name='vehicleMake'
					onChange={handleChange}
					value={data.vehicleMake}
				/>
			</label>
			<label className='label-main'>
				Model
				<input
					type='text'
					className='input-main'
					name='vehicleModel'
					onChange={handleChange}
					value={data.vehicleModel}
				/>
			</label>
			<label className='label-main'>
				Colour
				{/* <input
					type='text'
					className='input-main'
					name='vehicleExteriorColour'
					onChange={handleChange}
					value={data.vehicleExteriorColour}
				/> */}
				<Select
					options={colourOptions}
					isClearable={true}
					value={colourOptions.filter(
						(option) => option.value === data.vehicleExteriorColour
					)}
					onChange={(item) =>
						setData({
							...data,
							vehicleExteriorColour: item ? item.value : null,
						})
					}
					styles={customStyle}
					menuPlacement='top'
				/>
			</label>
			<label className='label-main'>
				Year
				{/* <input
					type='text'
					className='input-main'
					name='year'
					onChange={handleChange}
					value={data.year}
				/> */}
				<Select
					options={yearOptions}
					isClearable={true}
					value={yearOptions.filter(
						(option) => option.value === data.year
					)}
					onChange={(item) =>
						setData({
							...data,
							year: item ? item.value : null,
						})
					}
					styles={customStyle}
					menuPlacement='top'
				/>
			</label>
			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default VehiclesForm;
