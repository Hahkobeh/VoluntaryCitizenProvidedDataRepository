import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';

const VulnerablePersonInformation = ({ personId }) => {
	const [vulnerablePersonInformation, setVulnerablePersonInformation] =
		useState({
			personId: personId,
		});
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		getVPI();
		//eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (!updated) {
			setUpdated(true);
		}
		setVulnerablePersonInformation({
			...vulnerablePersonInformation,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(
				`${API_BASE_URL}/api/user/v1/vpi/create`,
				vulnerablePersonInformation
			)
			.then((res) => {
				setUpdated(false);
				getVPI();
			});
	};

	const getVPI = () => {
		axios.get(`${API_BASE_URL}/api/user/v1/vpi/${personId}`).then((res) => {
			if (res.data === '') {
			} else {
				setVulnerablePersonInformation(res.data);
			}
		});
	};
	return (
		<form onSubmit={handleSubmit} className='editor form-secondary'>
			<h2>Vulnerable Person Info</h2>
			<label className='label-main'>
				Description of Vulnerablility
				<input
					type='text'
					onChange={handleChange}
					name='vulnerablePersonDescription'
					value={
						vulnerablePersonInformation.vulnerablePersonDescription
					}
					className='input-secondary'
				/>
			</label>
			<label className='label-main'>
				Special Requests
				<input
					type='text'
					onChange={handleChange}
					name='specialRequests'
					value={vulnerablePersonInformation.specialRequests}
					className='input-secondary'
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

export default VulnerablePersonInformation;
