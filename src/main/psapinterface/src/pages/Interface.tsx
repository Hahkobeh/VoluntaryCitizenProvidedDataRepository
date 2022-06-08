import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Results from '../components/results/Results';
import '../styles/interface.scss';
import {
	PersonSearchInfo,
	PropertySearchInfo,
	SearchInfo,
	Tab,
	UserInfo,
} from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { personSearchAPI } from '../API';

type Props = {
	logout: () => void;
	userInfo: UserInfo;
};

const Interface = ({ logout, userInfo }: Props) => {
	const [search, setSearch] = useState<PersonSearchInfo | null>(null);

	const [tabs, setTabs] = useState<Tab[]>([]);

	useEffect(() => {
		console.log(search);
	}, [search]);

	const updateSearch = (info: SearchInfo) => {
		setSearch(info);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search == null) return;
		switch (search.type) {
			case 'person':
				personSearchAPI(search).then((res) => {
					console.log(res.data);
					setTabs([
						...tabs,
						{
							tabTitle: search.type + tabs.length,
							searchInfo: search,
							result: res.data,
						},
					]);
				});
				break;
			default:
				return;
		}
	};

	return (
		<>
			<Navbar
				logout={logout}
				setSearch={updateSearch}
				handleSearch={handleSearch}
			/>
			<Results />
			{JSON.stringify(search)}
		</>
	);
};

export default Interface;
