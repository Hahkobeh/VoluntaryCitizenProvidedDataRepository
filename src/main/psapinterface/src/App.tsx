import React, { useEffect, useState } from 'react';
import Landing from './pages/Landing';
import Interface from './pages/Interface';
import { UserInfo } from './interfaces';

type Props = {};

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem('user') !== null) {
			setLoggedIn(true);
		}
	}, []);

	const login = (userInfo: UserInfo) => {
		sessionStorage.setItem('user', JSON.stringify(userInfo));
		setLoggedIn(true);
	};

	const logout = () => {
		sessionStorage.removeItem('user');
		setLoggedIn(false);
	};

	return loggedIn && sessionStorage.getItem('user') !== null ? (
		<Interface
			logout={logout}
			userInfo={JSON.parse(sessionStorage.getItem('user') || '{}')}
		/>
	) : (
		<Landing login={login} />
	);
};

export default App;
