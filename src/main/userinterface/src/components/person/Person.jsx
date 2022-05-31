import React from 'react';
import Delete from '../../images/delete.svg';
const Person = ({
	person,
	person: { personId, personRelationship, personSurName, personGivenName },
	deletePerson,
	onSelect,
}) => {
	return (
		<li className='list-item' onClick={() => onSelect(personId, 'person')}>
			<h1>
				{personGivenName} {personSurName},
				<span>
					{personRelationship === 'user'
						? ' me'
						: ' my ' + personRelationship.toLowerCase()}
				</span>
			</h1>
			{personRelationship !== 'user' && (
				<img
					src={Delete}
					alt='delete person'
					className='delete'
					onClick={(e) => deletePerson(personId, e)}
				/>
			)}
		</li>
	);
};

export default Person;
