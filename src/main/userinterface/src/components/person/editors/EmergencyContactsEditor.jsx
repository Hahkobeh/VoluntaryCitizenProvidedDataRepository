import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const EmergencyContactsEditor = ({ personId }) => {
	const [emergencyContacts, setEmergencyContacts] = useState([]);
	const [newEmergencyContact, setNewEmergencyContact] = useState({
		personId: personId,
		personFullName: '',
		telephoneNumber: '',
	});

	useEffect(() => {
		getEmergencyContacts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDelete = (emergencyContact) => {
		axios
			.delete(`${API_BASE_URL}/api/user/v1/emergency-contact/delete`, {
				data: emergencyContact,
			})
			.then((res) => {
				getEmergencyContacts();
			});
	};

	const handleAdd = (e) => {
		e.preventDefault();
		console.log(newEmergencyContact);
		axios
			.post(
				`${API_BASE_URL}/api/user/v1/emergency-contact/create`,
				newEmergencyContact
			)
			.then((res) => {
				setNewEmergencyContact({
					personId: personId,
					personFullName: '',
					telephoneNumber: '',
				});
				getEmergencyContacts();
			});
	};

	const getEmergencyContacts = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/emergency-contact/${personId}`)
			.then((res) => {
				console.log(res.data);
				setEmergencyContacts(res.data);
			});
	};

	return (
		<div className='editor'>
			<h2>Emergency Contacts</h2>
			<ul className='editor-list'>
				{emergencyContacts.map((emergencyContact) => (
					<li key={emergencyContact.telephoneNumber}>
						{'(' +
							emergencyContact.telephoneNumber.slice(0, 3) +
							') ' +
							emergencyContact.telephoneNumber.slice(3, 6) +
							'-' +
							emergencyContact.telephoneNumber.slice(6, 10) +
							' ' +
							emergencyContact.personFullName}
						<img
							src={Delete}
							alt='delete this contact'
							onClick={() => handleDelete(emergencyContact)}
						/>
					</li>
				))}
				<li key='0' className='li-form'>
					<h3>Add Emergency Contact</h3>
					<form onSubmit={handleAdd}>
						<label>
							Full name
							<input
								type='text'
								name='personFullName'
								onChange={(data) =>
									setNewEmergencyContact({
										...newEmergencyContact,
										personFullName: data.target.value,
									})
								}
							/>
						</label>
						<label>
							Telephone Number
							<input
								type='text'
								name='telephoneNumber'
								onChange={(data) =>
									setNewEmergencyContact({
										...newEmergencyContact,
										telephoneNumber: data.target.value,
									})
								}
							/>
						</label>
						<input type='submit' />
					</form>
				</li>
			</ul>
		</div>
	);
};

export default EmergencyContactsEditor;
