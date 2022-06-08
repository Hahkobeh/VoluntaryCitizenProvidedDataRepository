import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const PropertyRelationshipEditor = ({ propertyId, persons }) => {
	const [relationships, setRelationships] = useState([]);
	const [newRelationship, setNewRelationship] = useState({
		propertyId: propertyId,
		personId: 0,
		keyholder: false,
	});

	useEffect(() => {
		getRelationships();
		//eslint-disable-next-line
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		if (newRelationship.keyholder === '' || newRelationship.personId === 0)
			return;
		axios
			.post(
				`${API_BASE_URL}/api/user/v1/property-relationship/create`,
				newRelationship
			)
			.then(() => {
				setNewRelationship({
					propertyId: propertyId,
					personId: 0,
					keyholder: false,
				});
				getRelationships();
			});
	};

	const handleDelete = (relationship) => {
		axios
			.delete(
				`${API_BASE_URL}/api/user/v1/property-relationship/delete`,
				{ data: relationship }
			)
			.then(() => {
				getRelationships();
			});
	};

	const getRelationships = () => {
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/property-relationship/${propertyId}`
			)
			.then((res) => {
				setRelationships(res.data);
			});
	};

	const getName = (personId) => {
		let temp = persons.find((person) => person.personId === personId);
		return temp.personGivenName + ' ' + temp.personSurName;
	};

	return (
		<div className='editor'>
			<h2>Related People</h2>
			<ul className='editor-list'>
				{relationships.map((relationship, index) => (
					<li key={index}>
						{getName(relationship.personId)} <br />
						{relationship.keyholder
							? 'Able to unlock building'
							: 'Unable to unlock building'}
						<br />
						{relationship.relationshipType}
						<img
							src={Delete}
							alt='delete relationship'
							onClick={() => handleDelete(relationship)}
						/>
					</li>
				))}
				<li className='li-form' key={-1}>
					<h3>Add Relationship</h3>
					<form onSubmit={handleAdd}>
						<label>
							Select Person
							<select
								onChange={(data) =>
									setNewRelationship({
										...newRelationship,
										personId: data.target.value,
									})
								}
								value={newRelationship.personId}
							>
								<option value=''> </option>
								{persons.map((person) => (
									<option value={person.personId}>
										{person.personGivenName}{' '}
										{person.personSurName}
									</option>
								))}
							</select>
						</label>
						<label>
							Key holder?
							<select
								value={newRelationship.keyholder}
								onChange={(data) => {
									setNewRelationship({
										...newRelationship,
										keyholder: data.target.value,
									});
								}}
							>
								<option value=''> </option>
								<option value={1}>Yes</option>
								<option value={0}>No</option>
							</select>
						</label>
						<input type='submit' />
					</form>
				</li>
			</ul>
		</div>
	);
};

export default PropertyRelationshipEditor;
