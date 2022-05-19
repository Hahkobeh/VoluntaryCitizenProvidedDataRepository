import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Landing from './pages/Landing';
import React, { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import About from './pages/About';
import axios from 'axios';
import { API_BASE_URL } from './constants';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [connected, setConnected] = useState(false);

	useEffect(() => {
		console.log(typeof sessionStorage.getItem('user'));
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
		sessionStorage.setItem('user', JSON.stringify(null));
		setLoggedIn(false);
	};

	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							loggedIn && connected ? (
								<Profile
									logout={logout}
									user={JSON.parse(
										sessionStorage.getItem('user')
									)}
									testConnection={testConnection}
								/>
							) : (
								<Landing
									login={login}
									connected={connected}
									testConnection={testConnection}
								/>
							)
						}
					/>
					<Route
						path='/registration'
						element={<Registration Navigate={Navigate} />}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
