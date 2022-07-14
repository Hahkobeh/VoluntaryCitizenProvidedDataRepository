import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const HazardousMaterialEditor = ({ propertyId }) => {
	const [hazardousMaterials, setHazardousMaterials] = useState([]);
	const [newHazardousMaterial, setNewHazardousMaterial] = useState({
		propertyId: propertyId,
	});

	useEffect(() => {
		getHazardousMaterials();
		//eslint-disable-next-line
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		axios
			.post(
				`${API_BASE_URL}/api/user/v1/hazardous-material/create`,
				newHazardousMaterial
			)
			.then(() => {
				setNewHazardousMaterial({
					propertyId: propertyId,
					commonName: '',
					substanceCategory: '',
					substanceContainer: '',
					unHazmatCode: '',
					location: '',
					quantity: '',
				});
				getHazardousMaterials();
			});
	};

	const handleDelete = (hazardousMaterial) => {
		axios
			.delete(
				`${API_BASE_URL}/api/user/v1/hazardous-material/delete/${hazardousMaterial.hazardousMaterialId}`
			)
			.then(() => {
				getHazardousMaterials();
			});
	};

	const getHazardousMaterials = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/hazardous-material/${propertyId}`)
			.then((res) => {
				setHazardousMaterials(res.data);
			});
	};

	return (
		<div className='editor'>
			<h2>Hazardous Materials</h2>
			<ul className='editor-list'>
				{hazardousMaterials.map((hazardousMaterial) => (
					<li key={hazardousMaterial.hazardousMaterialId}>
						{hazardousMaterial.commonName}
						<br />
						{hazardousMaterial.substanceCategory + ' '}
						{hazardousMaterial.substanceContainer}
						<br />
						{'Class ' + hazardousMaterial.unHazmatCode}
						<br />
						{hazardousMaterial.location + ', '}
						{hazardousMaterial.quantity}
						<img
							src={Delete}
							alt='delete hazardous materials'
							onClick={() => handleDelete(hazardousMaterial)}
						/>
					</li>
				))}
				<li className='li-form'>
					<h3>Add Material</h3>
					<form onSubmit={handleAdd}>
						<label>
							Substance Common Name
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										commonName: data.target.value,
									})
								}
								value={newHazardousMaterial.commonName}
							/>
						</label>
						<label>
							Substance Category
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										substanceCategory: data.target.value,
									})
								}
								value={newHazardousMaterial.substanceCategory}
							/>
						</label>
						<label>
							Container
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										substanceContainer: data.target.value,
									})
								}
								value={newHazardousMaterial.substanceContainer}
							/>
						</label>
						<label>
							UN Hazmat Code
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										unHazmatCode: data.target.value,
									})
								}
								value={newHazardousMaterial.unHazmatCode}
							/>
						</label>
						<label>
							Location
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										location: data.target.value,
									})
								}
								value={newHazardousMaterial.location}
							/>
						</label>
						<label>
							Quantity
							<input
								type='text'
								onChange={(data) =>
									setNewHazardousMaterial({
										...newHazardousMaterial,
										quantity: data.target.value,
									})
								}
								value={newHazardousMaterial.quantity}
							/>
						</label>

						<input type='submit' className='editor-submit'/>
					</form>
				</li>
			</ul>
		</div>
	);
};

export default HazardousMaterialEditor;
