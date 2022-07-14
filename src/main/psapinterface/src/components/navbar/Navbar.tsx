import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import {
	SearchInfo,
	SearchObjects,
	TabsObject,
	RequestedDataObjects,
} from '../../interfaces';
import Search from './Search';
import Tabs from './Tabs';
import '../../styles/navbar.scss';

type Props = {
	logout: () => void;
	searchObjects: SearchObjects;
	tabsObject: TabsObject;
	open: string;
	handleOpenClick: (search: string) => void;
	requestedDataObjects: RequestedDataObjects;
	setRequestedDataObjects: React.Dispatch<
		React.SetStateAction<RequestedDataObjects>
	>;
};

const Navbar = ({
	logout,
	searchObjects,
	tabsObject,
	open,
	handleOpenClick,
	requestedDataObjects,
	setRequestedDataObjects,
}: Props) => {
	const loadOpen = () => {
		switch (open) {
			case 'search':
				return (
					<Search
						searchObjects={searchObjects}
						requestedDataObjects={requestedDataObjects}
						setRequestedDataObjects={setRequestedDataObjects}
					/>
				);
			case 'tabs':
				return <Tabs tabsObject={tabsObject} />;
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
						onClick={() => handleOpenClick('search')}
					>
						Search
					</li>
					<li
						className={
							'nav-item' + (open === 'tabs' ? ' selected' : '')
						}
						onClick={() => handleOpenClick('tabs')}
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
