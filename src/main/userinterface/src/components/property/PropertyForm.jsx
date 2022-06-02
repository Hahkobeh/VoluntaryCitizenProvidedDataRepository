import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../constants';

const PropertyForm = ({ userId, reloadProperties }) => {
	const [data, setData] = useState({
		userId: userId,
		a1: '',
		a3: '',
		rd: '',
		sts: '',
		hno: '',
		pod: '',
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
			data.a1 !== '' &&
			data.a3 !== '' &&
			data.rd !== '' &&
			data.sts !== '' &&
			data.hno !== ''
		) {
			console.log(data);
			axios
				.post(`${API_BASE_URL}/api/user/v1/property/create`, data)
				.then((r) => {
					if (r !== null) {
						setData({
							userId: userId,
							a1: '',
							a3: '',
							rd: '',
							sts: '',
							hno: '',
							pod: '',
						});

						reloadProperties();
					}
				});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='form-main profile-form smaller'
		>
			<h1>Add Property</h1>
			<label className='label-main'>
				House Number
				<input
					type='text'
					className='input-main'
					name='hno'
					onChange={handleChange}
					value={data.hno}
				/>
			</label>
			<label className='label-main'>
				Road
				<input
					type='text'
					className='input-main'
					name='rd'
					onChange={handleChange}
					value={data.rd}
				/>
			</label>
			<label className='label-main'>
				Street Suffix {'(Street, Ave, etc.)'}
				<input
					type='text'
					className='input-main'
					name='sts'
					onChange={handleChange}
					value={data.sts}
				/>
			</label>
			<label className='label-main'>
				City
				<input
					type='text'
					className='input-main'
					name='a3'
					onChange={handleChange}
					value={data.a3}
				/>
			</label>
			<label className='label-main'>
				Province Code
				<input
					type='text'
					className='input-main'
					name='a1'
					onChange={handleChange}
					value={data.a1}
				/>
			</label>
			<label className='label-main'>
				Quadrant {'(not required)'}
				<input
					type='text'
					className='input-main'
					name='pod'
					onChange={handleChange}
					value={data.pod}
				/>
			</label>
			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default PropertyForm;
