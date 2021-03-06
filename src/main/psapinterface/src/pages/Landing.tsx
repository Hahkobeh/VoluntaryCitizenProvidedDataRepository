import React, { useState } from 'react';
import { loginAPI, registerAPI } from '../API';
import { PSAPUser } from '../interfaces';
import Login from '../components/Login';
import Register from '../components/Register';
import '../styles/landing.scss';

type Props = {
	login: (userInfo: PSAPUser) => void;
};

const Landing = ({ login }: Props) => {
	const [page, setPage] = useState(0);

	const handleLogin = (
		event: React.FormEvent<HTMLFormElement>,
		username: string,
		password: string
	) => {
		event.preventDefault();
		loginAPI({
			username: username,
			password: password,
			fire: false,
			police: false,
			medical: false,
		}).then((res) => {
			if (res.data === '') return;
			login(res.data);
		});
	};

	const handleRegister = (
		event: React.FormEvent<HTMLFormElement>,
		userInfo: PSAPUser
	) => {
		event.preventDefault();
		registerAPI(userInfo).then((res) => {
			if (res.data === '') return;
			login(res.data);
		});
	};

	const handlePageChange = (num: number) => {
		setPage(num);
	};

	return (
		<div className='landing'>
			{page === 0 ? (
				<Login
					handleLogin={handleLogin}
					handlePageChange={handlePageChange}
				/>
			) : (
				<Register
					handleRegister={handleRegister}
					handlePageChange={handlePageChange}
				/>
			)}
		</div>
	);
};

export default Landing;
