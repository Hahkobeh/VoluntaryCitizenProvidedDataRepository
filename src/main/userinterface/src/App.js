import Landing from './pages/Landing';
import React, { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import axios from 'axios';
import { API_BASE_URL } from './constants';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [connected, setConnected] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem('user') !== null) {
			setLoggedIn(true);
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
	};

	const logout = () => {
		sessionStorage.removeItem('user');
		setLoggedIn(false);
	};

	return (
		<>
			{loggedIn && connected ? (
				<Profile
					logout={logout}
					user={JSON.parse(sessionStorage.getItem('user'))}
					testConnection={testConnection}
				/>
			) : (
				<Landing
					login={login}
					connected={connected}
					testConnection={testConnection}
				/>
			)}
		</>
	);
}

export default App;
