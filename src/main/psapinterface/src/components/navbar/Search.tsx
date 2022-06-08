import React, { useState } from 'react';
import { SearchInfo } from '../../interfaces';
import Person from './search/Person';

type Props = {
	setSearch: (info: SearchInfo) => void;
	handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Search = ({ handleSearch, setSearch }: Props) => {
	const [searchType, setSearchType] = useState('person');

	const loadForm = () => {
		switch (searchType) {
			default:
				return <Person setSearch={setSearch} />;
		}
	};

	return (
		<div className='navbar-second'>
			<ul>
				<li onClick={() => setSearchType('person')}>Person</li>
				<li onClick={() => setSearchType('telephone')}>Telephone</li>
				<li onClick={() => setSearchType('property')}>Property</li>
				<li onClick={() => setSearchType('vehicle')}>Vehicle</li>
			</ul>
			<form onSubmit={handleSearch}>{loadForm()}</form>
		</div>
	);
};

export default Search;
