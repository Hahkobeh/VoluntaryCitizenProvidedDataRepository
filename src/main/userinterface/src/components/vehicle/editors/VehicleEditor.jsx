import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';

const VehicleEditor = ({ selectedVehicle, reloadVehicles }) => {
	const [vehicle, setVehicle] = useState(selectedVehicle);
	const [updated, setUpdated] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (!updated) {
			setUpdated(true);
		}
		setVehicle({
			...vehicle,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${API_BASE_URL}/api/user/v1/vehicle/update`, vehicle)
			.then(() => {
				setUpdated(false);
				reloadVehicles();
			});
	};

	return (
		<form onSubmit={handleSubmit} className='editor form-secondary'>
			<h2>Vehicle Info</h2>
			<label className='label-main'>
				Province Code
				<input
					type='text'
					className='input-secondary'
					name='provinceCode'
					value={vehicle.provinceCode}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Colour
				<input
					type='text'
					className='input-secondary'
					name='vehicleExteriorColour'
					value={vehicle.vehicleExteriorColour}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Make
				<input
					type='text'
					className='input-secondary'
					name='vehicleMake'
					value={vehicle.vehicleMake}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Model
				<input
					type='text'
					className='input-secondary'
					name='vehicleModel'
					value={vehicle.vehicleModel}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Year
				<input
					type='text'
					className='input-secondary'
					name='year'
					value={vehicle.year}
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

export default VehicleEditor;
