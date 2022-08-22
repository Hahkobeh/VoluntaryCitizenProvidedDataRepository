import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Disclaimer from './components/Disclaimer';
import { API_BASE_URL, disclaimer } from './constants';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [connected, setConnected] = useState(false);

	const [showDisclaimer, setShowDisclaimer] = useState(true);

	useEffect(() => {
		console.log(
			'showdisclaimer set to ' +
				showDisclaimer +
				'. User is: ' +
				sessionStorage.getItem('user') +
				', vs ' +
				disclaimer.date
		);
	}, [showDisclaimer]);

	const checkDisclaimer = () => {
		const loginInfo = {
			email: JSON.parse(sessionStorage.getItem('user')).email,
			password: JSON.parse(sessionStorage.getItem('user')).password,
		};
		axios
			.post(`${API_BASE_URL}/api/user/v1/login`, loginInfo)
			.then((res) => {
				console.log(res.data);
				console.log(typeof res.data);
				if (res.data !== '') {
					login(res.data);
				}
			})
			.catch((e) => {
				console.log('failed');
				testConnection();
			});
	};

	useEffect(() => {
		if (sessionStorage.getItem('user') !== null) {
			setLoggedIn(true);
			if (
				JSON.parse(sessionStorage.getItem('user')).disclaimerDate ===
				disclaimer.date
			) {
				setShowDisclaimer(false);
			}
		}

		testConnection();
	}, [connected]);

	const testConnection = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/test`)
			.then((r) => {
				setConnected(true);
				return true;
			})
			.catch((err) => {
				setConnected(false);
				console.log('NOT CONNECTED TO BACKEND!');
				return false;
			});
	};

	const login = (data) => {
		sessionStorage.setItem('user', JSON.stringify(data));
		setLoggedIn(true);
		if (
			JSON.parse(sessionStorage.getItem('user')).disclaimerDate ===
			disclaimer.date
		) {
			console.log('here');
			setShowDisclaimer(false);
		}
	};

	const logout = () => {
		sessionStorage.removeItem('user');
		setLoggedIn(false);
		setShowDisclaimer(true);
	};

	return (
		<>
			{loggedIn && connected ? (
				<>
					{showDisclaimer && (
						<Disclaimer
							user={JSON.parse(sessionStorage.getItem('user'))}
							checkDisclaimer={checkDisclaimer}
						/>
					)}
					<Profile
						logout={logout}
						user={JSON.parse(sessionStorage.getItem('user'))}
						testConnection={testConnection}
					/>
				</>
			) : (
				<Landing
					login={login}
					connected={connected}
					testConnection={testConnection}
				/>
			)}
			<p className='red'>
				THIS WEBSITE IS A PROOF OF CONCEPT, DO NOT INPUT SENSITIVE
				INFORMATION
			</p>
		</>
	);
}

export default App;
