import axios from 'axios';
import React from 'react';
import Person from './Person';
import { API_BASE_URL } from '../../constants';

const PersonList = ({ persons, reloadPersons, onSelect }) => {
	const deletePerson = (personId, e) => {
		e.stopPropagation();
		axios
			.delete(`${API_BASE_URL}/api/user/v1/person/delete/${personId}`)
			.then(() => {
				reloadPersons();
			});
	};

	return (
		<div className='list-container'>
			<h2 className='title'>Person</h2>
			<ul className='list'>
				{persons.map((person) => (
					<Person
						person={person}
						key={person.personId}
						deletePerson={deletePerson}
						onSelect={onSelect}
					/>
				))}
			</ul>
		</div>
	);
};
export default PersonList;
