import React, { useEffect, useState } from 'react';
import Landing from './pages/Landing';
import Interface from './pages/Interface';
import { PSAPUser } from './interfaces';

type Props = {};

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		login({
			username: 'test1',
			password: 'test1',
			fire: true,
			police: true,
			medical: true,
		});
	}, []);

	const login = (psapUser: PSAPUser) => {
		sessionStorage.setItem('user', JSON.stringify(psapUser));
		setLoggedIn(true);
	};

	const logout = () => {
		sessionStorage.removeItem('user');
		setLoggedIn(false);
	};

	return loggedIn && sessionStorage.getItem('user') !== null ? (
		<Interface
			logout={logout}
			psapUser={JSON.parse(sessionStorage.getItem('user') || '{}')}
		/>
	) : (
		<Landing login={login} />
	);
};

export default App;
