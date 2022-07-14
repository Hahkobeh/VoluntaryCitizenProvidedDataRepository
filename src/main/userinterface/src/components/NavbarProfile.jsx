import React from 'react';
import Logo from '../images/logo.svg';

const Navbar = ({ tab, handleTabChange, logout }) => {
	return (
		<div className='profile-navbar'>
			<img
				src={Logo}
				alt='National 911 Portal'
				onClick={() => handleTabChange('user')}
			/>
			<ul className='profile-list'>
				<li
					className={
						'profile-list-item' +
						(tab === 'person' ? ' selected' : '')
					}
					onClick={() => handleTabChange('person')}
				>
					Person
				</li>
				<li
					className={
						'profile-list-item' +
						(tab === 'property' ? ' selected' : '')
					}
					onClick={() => handleTabChange('property')}
				>
					Property
				</li>
				<li
					className={
						'profile-list-item' +
						(tab === 'vehicle' ? ' selected' : '')
					}
					onClick={() => handleTabChange('vehicle')}
				>
					Vehicle
				</li>
				<li
					className={
						'profile-list-item' +
						(tab === 'account' ? ' selected' : '')
					}
					onClick={() => handleTabChange('account')}
				>
					Account
				</li>
				<li
					className={'profile-list-item logout'}
					onClick={logout}
				>
					Logout
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
