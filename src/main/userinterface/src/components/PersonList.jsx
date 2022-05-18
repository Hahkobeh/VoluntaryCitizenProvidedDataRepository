import React from 'react';
import Person from "../components/Person";

const PersonList = ({persons}) => {
    console.log(persons)
  return (
    <div className="info person-list">
        <ul>
            {persons.map(person => (
                <Person person={person} key={person.personId}/>
            ))}
        </ul>
    </div>
  )
}
export default PersonList;
