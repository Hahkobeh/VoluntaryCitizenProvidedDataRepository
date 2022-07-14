import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const MedicalConditionsEditor = ({ personId }) => {
	const [medicalConditions, setMedicalConditions] = useState([]);
	const [newMedicalCondition, setNewMedicalCondition] = useState({
		personId: personId,
	});

	useEffect(() => {
		getMedicalConditions();
		//eslint-disable-next-line
	}, []);

	const handleDelete = (medicalCondition) => {
		console.log(medicalCondition);
		axios
			.delete(`${API_BASE_URL}/api/user/v1/medical-condition/delete`, {
				data: medicalCondition,
			})
			.then((res) => {
				getMedicalConditions();
			});
	};

	const handleAdd = (e) => {
		e.preventDefault();
		axios
			.post(
				`${API_BASE_URL}/api/user/v1/medical-condition/create`,
				newMedicalCondition
			)
			.then((res) => {
				setNewMedicalCondition({
					personId: personId,
				});
				getMedicalConditions();
			});
	};

	const getMedicalConditions = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/medical-condition/${personId}`)
			.then((res) => {
				setMedicalConditions(res.data);
			});
	};

	return (
		<div className='editor'>
			<h2>Medical Conditions</h2>
			<ul className='editor-list'>
				{medicalConditions.map((medicalCondition) => (
					<li key={medicalCondition.medicalCondition}>
						<div>
							{medicalCondition.medicalCondition}
							<br />
							{medicalCondition.additionalInformation}
						</div>

						<img
							src={Delete}
							alt='delete this number'
							onClick={() => handleDelete(medicalCondition)}
						/>
					</li>
				))}
				<li key={0} className='li-form'>
					<h3>Add Medical Condition</h3>
					<form onSubmit={handleAdd}>
						<label>
							Condition
							<input
								type='text'
								name='medicalCondition'
								onChange={(data) =>
									setNewMedicalCondition({
										...newMedicalCondition,
										medicalCondition: data.target.value,
									})
								}
								value={newMedicalCondition.medicalCondition}
							/>
						</label>
						<label>
							Additional Info
							<input
								type='text'
								name='additionalInformation'
								onChange={(data) =>
									setNewMedicalCondition({
										...newMedicalCondition,
										additionalInformation:
											data.target.value,
									})
								}
								value={
									newMedicalCondition.additionalInformation
								}
							/>
						</label>
						<input type='submit' className='editor-submit'/>
					</form>
				</li>
			</ul>
		</div>
	);
};

export default MedicalConditionsEditor;
