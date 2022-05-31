import React, { useState } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';

const LoginForm = ({ setPage, login, testConnection }) => {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [error, setError] = useState('⠀');

	const attemptLogin = (e) => {
		e.preventDefault();

		if (email === '') {
			setError('Email required.');
			return;
		}

		if (password === '') {
			setError('Password required.');
			return;
		}

		const loginInfo = {
			email: email.toLowerCase(),
			password: password,
		};

		axios
			.post(`${API_BASE_URL}/api/user/v1/login`, loginInfo)
			.then((res) => {
				console.log(res.data);
				console.log(typeof res.data);
				if (res.data !== '') {
					login(res.data);
				}
				{
					setError('Login unsuccessful.');
				}
			})
			.catch((e) => {
				console.log('failed');
				testConnection();
			});
	};

	return (
		<>
			<form onSubmit={attemptLogin} className='form-main'>
				<h1>Login</h1>
				<p className='error'>{error}</p>
				<label>
					Email
					<input
						type='text'
						className='input-main'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>

				<label>
					Password
					<input
						type='password'
						className='input-main'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>

				<input type='submit' className='button-main' value='Login' />
				<p>
					New?{' '}
					<span onClick={() => setPage('register')}>
						Register now!
					</span>
				</p>
			</form>
		</>
	);
};

export default LoginForm;
