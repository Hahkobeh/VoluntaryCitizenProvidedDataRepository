import axios from 'axios';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../constants';

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
				Province Code
				<input
					type='text'
					className='input-main'
					name='provinceCode'
					onChange={handleChange}
					value={data.provinceCode}
				/>
			</label>
			<label className='label-main'>
				Colour
				<input
					type='text'
					className='input-main'
					name='vehicleExteriorColour'
					onChange={handleChange}
					value={data.vehicleExteriorColour}
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
				Year
				<input
					type='text'
					className='input-main'
					name='year'
					onChange={handleChange}
					value={data.year}
				/>
			</label>
			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default VehiclesForm;
