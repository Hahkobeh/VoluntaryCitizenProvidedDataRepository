import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/landing.scss';
import { API_BASE_URL } from '../constants';

function Landing(props) {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const attemptLogin = (e) => {
		e.preventDefault();

		if (email === '') {
			return;
		}

		if (password === '') {
			return;
		}

		const loginInfo = {
			email: email,
			password: password,
		};

		axios
			.post(`${API_BASE_URL}/api/user/v1/login`, loginInfo)
			.then((res) => {
				console.log(res.data);
				console.log(typeof res.data);
				if (res.data !== '') {
					props.login(res.data);
				}
			})
			.catch((e) => {
				console.log('failed');
				props.testConnection();
			});
	};

	return (
		<div className='landing'>
			<h1>VCPDR</h1>
			{props.connected ? (
				<>
					<form onSubmit={attemptLogin}>
						<label>
							email
							<input
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<label>
							password
							<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
						<input type='submit' />
					</form>
					<Link to='/registration'>
						<button>Register!</button>
					</Link>
					<Link to='/about'>
						<button>About!</button>
					</Link>
				</>
			) : (
				<>
					<p>Connection Failed</p>
					<button onClick={props.testConnection}>Retry?</button>
				</>
			)}
		</div>
	);
}

export default Landing;
