import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import { SearchInfo } from '../../interfaces';
import Search from './Search';
import Tabs from './Tabs';
import '../../styles/navbar.scss';

type Props = {
	logout: () => void;
	setSearch: (info: SearchInfo) => void;
	handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Navbar = ({ logout, setSearch, handleSearch }: Props) => {
	const [open, setOpen] = useState('none');

	const handleClick = (value: string) => {
		if (value === open) {
			setOpen('none');
		} else {
			setOpen(value);
		}
	};

	const loadOpen = () => {
		switch (open) {
			case 'search':
				return (
					<Search setSearch={setSearch} handleSearch={handleSearch} />
				);
			case 'tabs':
				return <Tabs />;
			default:
				return <></>;
		}
	};

	return (
		<>
			<div className='navbar-main'>
				<img src={Logo} alt='' />
				<ul className='nav-list'>
					<li
						className={
							'nav-item' + (open === 'search' ? ' selected' : '')
						}
						onClick={() => handleClick('search')}
					>
						Search
					</li>
					<li
						className={
							'nav-item' + (open === 'tabs' ? ' selected' : '')
						}
						onClick={() => handleClick('tabs')}
					>
						Tabs
					</li>
					<li className='nav-item' onClick={() => logout()}>
						Logout
					</li>
				</ul>
			</div>
			{loadOpen()}
		</>
	);
};

export default Navbar;
