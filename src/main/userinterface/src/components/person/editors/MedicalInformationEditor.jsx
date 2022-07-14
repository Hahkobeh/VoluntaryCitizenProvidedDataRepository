import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';

const MedicalInformationEditor = ({ personId }) => {
	const [medicalInformation, setMedicalInformation] = useState({
		personId: personId,
	});
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		getMedicalInformation();
		//eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (!updated) {
			setUpdated(true);
		}
		setMedicalInformation({
			...medicalInformation,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				`${API_BASE_URL}/api/user/v1/medical-information/create`,
				medicalInformation
			)
			.then((res) => {
				setUpdated(false);
				getMedicalInformation();
			});
	};

	const getMedicalInformation = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/medical-information/${personId}`)
			.then((res) => {
				if (res.data === '') {
				} else {
					setMedicalInformation(res.data);
				}
			});
	};

	return (
		<form onSubmit={handleSubmit} className='editor form-secondary'>
			<h2>Medical Information</h2>
			<label className='label-main'>
				Health Care Number
				<input
					type='text'
					className='input-secondary'
					onChange={handleChange}
					value={medicalInformation.healthCareNumber}
					name='healthCareNumber'
				/>
			</label>
			<label className='label-main'>
				Province Code
				<input
					type='text'
					name='provinceCode'
					value={medicalInformation.provinceCode}
					className='input-secondary'
					onChange={handleChange}
				/>
			</label>
			<label className='label-main'>
				Blood type
				<select
					value={medicalInformation.personBloodTypeCode}
					name='personBloodTypeCode'
					className='select-secondary'
					onChange={handleChange}
				>
					<option value=' '> </option>
					<option value='A'>A</option>
					<option value='B'>B</option>
					<option value='AB'>AB</option>
					<option value='O'>O</option>
				</select>
			</label>
			<label className='label-main'>
				Rh
				<select
					value={medicalInformation.personRhType}
					name='personRhType'
					className='select-secondary hello'
					onChange={handleChange}
				>
					<option value=' '> </option>
					<option value={1}>+</option>
					<option value={0}>-</option>
				</select>
			</label>
			<label className='label-main'>
				Pregnant?
				<select
					value={medicalInformation.isPregnant}
					name='isPregnant'
					className='select-secondary'
					onChange={handleChange}
				>
					<option value=' '> </option>
					<option value={1}>Yes</option>
					<option value={0}>No</option>
				</select>
			</label>
			{updated && (
				<button type='submit' className='button-main'>
					Save
				</button>
			)}
		</form>
		// TODO!
	);
};

export default MedicalInformationEditor;
