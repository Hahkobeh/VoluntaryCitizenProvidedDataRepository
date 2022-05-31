import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const PrescribedMedicationsEditor = ({ personId }) => {
	const [prescribedMedications, setPrescribedMedications] = useState([]);
	const [newPrescribedMedication, setNewPrescribedMedication] = useState({
		personId: personId,
	});

	useEffect(() => {
		getPrescribedMedcations();
		//eslint-disable-next-line
	}, []);

	const handleDelete = (prescribedMedication) => {
		axios
			.delete(
				`${API_BASE_URL}/api/user/v1/prescribed-medication/delete`,
				{
					data: prescribedMedication,
				}
			)
			.then((res) => {
				getPrescribedMedcations();
			});
	};

	const handleAdd = (e) => {
		e.preventDefault();
		axios
			.post(
				`${API_BASE_URL}/api/user/v1/prescribed-medication/create`,
				newPrescribedMedication
			)
			.then((res) => {
				setNewPrescribedMedication({
					personId: personId,
				});
				getPrescribedMedcations();
			});
	};

	const getPrescribedMedcations = () => {
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/prescribed-medication/${personId}`
			)
			.then((res) => {
				setPrescribedMedications(res.data);
			});
	};

	return (
		<div className='editor'>
			<h2>Prescribed Medications</h2>
			<ul className='editor-list'>
				{prescribedMedications.map((prescribedMedication) => (
					<li
						key={
							prescribedMedication.medicationGenericProductIdentification
						}
					>
						{
							prescribedMedication.medicationGenericProductIdentification
						}
						, {prescribedMedication.medicationDoseMeasure}
						<img
							src={Delete}
							alt='delete this number'
							onClick={() => handleDelete(prescribedMedication)}
						/>
					</li>
				))}
				<li key={0} className='li-form'>
					<h3>Add Prescription</h3>
					<form onSubmit={handleAdd}>
						<label>
							Medication Name
							<input
								type='text'
								name='medicationGenericProductIdentification'
								onChange={(data) =>
									setNewPrescribedMedication({
										...newPrescribedMedication,
										medicationGenericProductIdentification:
											data.target.value,
									})
								}
								value={
									newPrescribedMedication.medicationGenericProductIdentification
								}
							/>
						</label>
						<label>
							Dosage/Frequency
							<input
								type='text'
								name='medicationDoseMeasure'
								onChange={(data) =>
									setNewPrescribedMedication({
										...newPrescribedMedication,
										medicationDoseMeasure:
											data.target.value,
									})
								}
								value={
									newPrescribedMedication.medicationDoseMeasure
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

export default PrescribedMedicationsEditor;
