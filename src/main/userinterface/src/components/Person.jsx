import React from 'react';

function Person({person: {personId, personSurName, personGivenName, personMaidenName, personMiddleName, personBirthDate,personSexCode, personPrimaryLanguage, personSecondaryLanguage, wheelchair, licenseNumber, licenseProvince}, onChange}) {
    return (
        <li className="person" key={personId}>
            <h1>{personGivenName} {personSurName}</h1>
            <button className='delete'>X</button>
            
        </li>
    );
}

export default Person;