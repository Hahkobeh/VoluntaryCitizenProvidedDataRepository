import axios from 'axios';
import React from 'react';
import Person from '../components/Person';
import { API_BASE_URL } from '../constants';

const PersonList = ({ persons, reloadPersons }) => {
	console.log(persons);

	const deletePerson = (personId) => {
		axios
			.delete(`${API_BASE_URL}/api/user/v1/person/delete/${personId}`)
			.then((r) => {
				reloadPersons();
			});
	};

	return (
		<div className='info person-list'>
			<ul>
				{persons.map((person) => (
					<Person
						person={person}
						key={person.personId}
						deletePerson={deletePerson}
					/>
				))}
			</ul>
		</div>
	);
};
export default PersonList;
