import React from 'react';

const Person = ({
	person: {
		personId,
		personSurName,
		personGivenName,
		personMaidenName,
		personMiddleName,
		personBirthDate,
		personSexCode,
		personPrimaryLanguage,
		personSecondaryLanguage,
		wheelchair,
		licenseNumber,
		licenseProvince,
	},
	deletePerson,
}) => {
	console.log(personId);
	return (
		<li className='person'>
			<h1>
				{personGivenName} {personSurName}
			</h1>
			<div className='person-buttons'>
				<button className='edit'>edit</button>
				<button className='' onClick={() => deletePerson(personId)}>
					xxx
				</button>
			</div>
		</li>
	);
};

export default Person;
