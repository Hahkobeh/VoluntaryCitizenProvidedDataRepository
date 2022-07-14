import React from 'react';

import Logo from '../images/logo.svg';

const NavbarLanding = ({page, setPage }) => {
	return (
		<div className='landing-navbar'>
			<img
				src={Logo}
				alt='National 911 Portal'
				onClick={() => setPage('home')}
			/>
			<ul className='landing-list'>
				<li
					className={
						'landing-list-item' +
						(page === 'about' ? ' selected' : '')
					}
					onClick={() => setPage('about')}
				>
					About
				</li>
				<li
					className={
						'landing-list-item' +
						(page === 'register' ? ' selected' : '')
					}
					onClick={() => setPage('register')}
				>
					Join
				</li>
				<li
					className={
						'landing-list-item' +
						(page === 'login' ? ' selected' : '')
					}
					onClick={() => setPage('login')}
				>
					Login
				</li>
				<li
					className={
						'landing-list-item' +
						(page === 'home' ? ' selected' : '')
					}
					onClick={() => setPage('home')}
				>
					Home
				</li>
			</ul>
		</div>
	);
};

export default NavbarLanding;
