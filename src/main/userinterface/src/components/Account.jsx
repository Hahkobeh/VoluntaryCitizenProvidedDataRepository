import React from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../constants';
import '../style/account.scss';
import axios from 'axios';

const Account = () => {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [newPasswordCheck, setNewPasswordCheck] = useState('');
	const [error, setError] = useState('');

	const handleSubmitNewPassword = (e) => {
		e.preventDefault();
		if (
			oldPassword !== JSON.parse(sessionStorage.getItem('user')).password
		) {
			setError('Incorrect password');
			return;
		}

		if (newPassword === '' || newPasswordCheck === '') {
			setError('Enter new password');
			return;
		}
		if (newPassword !== newPasswordCheck) {
			setError('Passwords do not match');
			return;
		}

		if (newPassword === oldPassword) {
			setError('New and old passwords must be different');
			return;
		}
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/change-password/${
					JSON.parse(sessionStorage.getItem('user')).userId
				}/${newPassword}`
			)
			.then((res) => {
				if (!res.data) {
					setError('Failed to connect to server');
				} else {
					setError('');
					setNewPassword('');
					setNewPasswordCheck('');
					setOldPassword('');
					sessionStorage.setItem(
						'user',
						JSON.stringify({
							...JSON.parse(sessionStorage.getItem('user')),
							password: newPassword,
						})
					);
				}
			});
	};

	return (
		<div className='account-container'>
			<h1>Account</h1>
			<form onSubmit={handleSubmitNewPassword} className='smaller'>
				<h2>New Password</h2>
				<label className='label-main'>
					Old password
					<input
						type='password'
						className='input-main input'
						onChange={(e) => setOldPassword(e.target.value)}
						value={oldPassword}
					/>
				</label>
				<label className='label-main'>
					New password
					<input
						type='password'
						className='input-main input'
						onChange={(e) => setNewPassword(e.target.value)}
						value={newPassword}
					/>
				</label>
				<label className='label-main'>
					Confirm password
					<input
						type='password'
						className='input-main input'
						onChange={(e) => setNewPasswordCheck(e.target.value)}
						value={newPasswordCheck}
					/>
				</label>
				<p className='error'>{error ? error : '⠀'}</p>
				<input
					type='submit'
					className='button'
					value='Change Password'
				/>
			</form>
			<div className='verified'>
				<p>Requires futher development</p>
				<h2>Manage verified</h2>
				<div>
					<h3>Email</h3>
					<h3>Phone</h3>
				</div>
			</div>
		</div>
	);
};

export default Account;
