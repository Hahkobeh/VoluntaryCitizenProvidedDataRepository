import React, { useState, useEffect } from 'react';
import Medicine from '../../images/medicine-svgrepo-com.svg';
import EmergencyContactsEditor from './editors/EmergencyContactsEditor';
import MedicalConditionsEditor from './editors/MedicalConditionsEditor';
import MedicalInformationEditor from './editors/MedicalInformationEditor';
import PersonEditor from './editors/PersonEditor';
import TelephoneEditor from './editors/TelephoneEditor';
import PrescribedMedicationsEditor from './editors/PrescribedMedicationsEditor';
import Return from '../../images/return.png';
import '../../style/editor.scss';

const PersonMenu = ({ selectedPerson, onSelect, reloadPersons }) => {
	const [selected, setSelected] = useState('person');

	const [emergencyContacts, setEmergencyContacts] = useState([]);

	const [VPI, setVPI] = useState(null);
	const [medicalInformation, setMedicalInformation] = useState(null);
	const [medicalConditions, setMedicalConditions] = useState([]);
	const [prescribedMedications, setPrescribedMedications] = useState([]);

	useEffect(() => () => console.log('unmount'), []);

	const navigate = () => {
		switch (selected) {
			case 'person':
				return (
					<PersonEditor
						selectedPerson={selectedPerson}
						reloadPersons={reloadPersons}
					/>
				);
			case 'telephones':
				return <TelephoneEditor personId={selectedPerson.personId} />;
			case 'emergency-contacts':
				return (
					<EmergencyContactsEditor
						personId={selectedPerson.personId}
					/>
				);
			case 'medical-information':
				return (
					<MedicalInformationEditor
						personId={selectedPerson.personId}
					/>
				);
			case 'medical-conditions':
				return (
					<MedicalConditionsEditor
						personId={selectedPerson.personId}
					/>
				);
			case 'prescribed-medications':
				return (
					<PrescribedMedicationsEditor
						personId={selectedPerson.personId}
					/>
				);
			default:
				setSelected('person');
		}
	};

	return (
		<>
			<h1 className='menu-name'>
				{selectedPerson.personGivenName} {selectedPerson.personSurName}
			</h1>
			<ul className='menu-list'>
				<li
					className={
						'menu-item' + (selected === 'person' ? ' current' : '')
					}
					onClick={() => setSelected('person')}
				>
					<h2>Person</h2>
				</li>

				<li
					className={
						'menu-item' +
						(selected === 'telephones' ? ' current' : '')
					}
					onClick={() => setSelected('telephones')}
				>
					<h2>Telephones</h2>
				</li>

				<li
					className={
						'menu-item' +
						(selected === 'emergency-contacts' ? ' current' : '')
					}
					onClick={() => setSelected('emergency-contacts')}
				>
					<h2>Emergency Contacts</h2>
				</li>

				<li
					className={
						'menu-item' +
						(selected === 'medical-information' ? ' current' : '')
					}
					onClick={() => setSelected('medical-information')}
				>
					<h2>Medical Information</h2>
				</li>

				<li
					className={
						'menu-item' +
						(selected === 'medical-conditions' ? ' current' : '')
					}
					onClick={() => setSelected('medical-conditions')}
				>
					<h2>Medical Conditions</h2>
				</li>

				<li
					className={
						'menu-item' +
						(selected === 'prescribed-medications'
							? ' current'
							: '')
					}
					onClick={() => setSelected('prescribed-medications')}
				>
					<h2>Prescribed Medications</h2>
				</li>
				<li
					className='menu-item return'
					onClick={() => onSelect(null, 'person')}
				>
					<h2>Return</h2>
				</li>
			</ul>

			{navigate()}
		</>
	);
};

export default PersonMenu;
