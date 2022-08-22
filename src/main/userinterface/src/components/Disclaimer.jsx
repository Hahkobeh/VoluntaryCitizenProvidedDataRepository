import axios from 'axios';
import React from 'react';
import { API_BASE_URL, disclaimer } from '../constants';
import '../style/disclaimer.scss';

const Disclaimer = ({ user, checkDisclaimer }) => {
	const handleAccept = () => {
		console.log(new Date());
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/disclaimer-agree/${user.userId}/${disclaimer.date}`
			)
			.then((res) => {
				console.log(res.data);
				if (res.data === true) {
					checkDisclaimer();
				}
			});
	};

	return (
		<div className='disclaimer-wrapper'>
			<div className='disclaimer-background' />
			<div className='disclaimer-container'>
				<h1>Disclaimer</h1>
				<h3>Date: {disclaimer.date}</h3>
				<h3>{user.email}</h3>
				<p>{disclaimer.value}</p>
				<input type='button' onClick={handleAccept} value='Accept' />
			</div>
		</div>
	);
};

export default Disclaimer;
