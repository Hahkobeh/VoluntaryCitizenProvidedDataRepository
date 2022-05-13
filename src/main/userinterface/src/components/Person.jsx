import React from 'react';

function Person({person: {personId, personSurName, personGivenName, personMaidenName, personMiddleName, personBirthDate,personSexCode, personPrimaryLanguage, personSecondaryLanguage, wheelchair, licenseNumber, licenseProvince}, onChange}) {
    return (
        <li className="person" key={personId}>
            <h1>{personGivenName} {personSurName}</h1>
            <label>
                Maiden Name:
                <input type="text" value={personMaidenName} name={personMaidenName}/>
            </label>
            <label>
                Middle Name:
                <label>{personMiddleName}</label>
            </label>
        </li>
    );
}

export default Person;