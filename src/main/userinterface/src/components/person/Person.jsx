import React from 'react';

const Person = ({
	person,
	person: { personId, personRelationship, personSurName, personGivenName },
	deletePerson,
	onSelect,
}) => {
	return (
		<li className='person' onClick={() => onSelect(person, 'person')}>
			<h1>
				{personGivenName} {personSurName},
				{personRelationship === 'user'
					? ' me'
					: ' my ' + personRelationship.toLowerCase()}
			</h1>
			{personRelationship !== 'user' && (
				<button className='' onClick={() => deletePerson(personId)}>
					xxx
				</button>
			)}
		</li>
	);
};

export default Person;
