import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';

const PropertyEditor = ({ selectedProperty, reloadProperties }) => {
	const [property, setProperty] = useState(selectedProperty);
	const [updated, setUpdated] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (!updated) {
			setUpdated(true);
		}
		setProperty({
			...property,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${API_BASE_URL}/api/user/v1/property/update`, {
				...property,
				pc: property.pc.replace(/\s/g, ''),
			})
			.then(() => {
				setUpdated(false);
				reloadProperties();
			});
	};

	return (
		<form onSubmit={handleSubmit} className='editor form-secondary'>
			<h2>Property Info</h2>
			<label className='label-main'>
				Property Type
				<input
					type='text'
					className='input-secondary'
					name='propertyType'
					value={property.propertyType}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Postal Code
				<input
					type='text'
					className='input-secondary'
					name='pc'
					value={property.pc}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				House Number suffix
				<input
					type='text'
					className='input-secondary'
					name='hns'
					value={property.hns}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Gas Shut Off Location
				<input
					type='text'
					className='input-secondary'
					name='gasShutOffLocation'
					value={property.gasShutOffLocation}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Gas Provider
				<input
					type='text'
					className='input-secondary'
					name='gasProvider'
					value={property.gasProvider}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Electricity Provider
				<input
					type='text'
					className='input-secondary'
					name='electricityProvider'
					value={property.electricityProvider}
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Water Provider
				<input
					type='text'
					className='input-secondary'
					name='waterProvider'
					value={property.waterProvider}
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

export default PropertyEditor;
