import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import { UNHAZMATDATA } from '../../../hazmatcodes';
import Delete from '../../../images/delete-white.svg';

const HazardousMaterialEditor = ({ propertyId }) => {
	const [hazardousMaterials, setHazardousMaterials] = useState([]);
	const [newHazardousMaterial, setNewHazardousMaterial] = useState({
		propertyId: propertyId,
		commonName: '',
		substanceCategory: '',
		substanceContainer: '',
		unHazmatCode: '',
		location: '',
		quantity: '',
	});

	useEffect(() => {
		getHazardousMaterials();
		//eslint-disable-next-line
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		console.log(newHazardousMaterial.substanceCategory);
		if (
			newHazardousMaterial.commonName === '' ||
			newHazardousMaterial.substanceCategory === ''
		)
			return;
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
						{hazardousMaterial.substanceCategory + ', '}
						{hazardousMaterial.substanceContainer}
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
							<select
								onChange={(data) => {
									console.log(data.target.value);
									const { name, code } = JSON.parse(
										data.target.value
									);
									console.log(name + code);
									console.log(newHazardousMaterial);
									setNewHazardousMaterial({
										...newHazardousMaterial,
										substanceCategory: name,
										unHazmatCode: code,
									});
								}}
								style={{ width: '170px' }}
								value={JSON.stringify({
									name: newHazardousMaterial.substanceCategory,
									code: newHazardousMaterial.unHazmatCode,
								})}
							>
								<option
									value={JSON.stringify({
										name: '',
										code: '',
									})}
								></option>
								{UNHAZMATDATA.map((item, i) => (
									<option
										value={JSON.stringify(item)}
										key={i}
									>
										{item.name + ' (' + item.code + ')'}
									</option>
								))}
								<option
									value={JSON.stringify({
										name: 'Other',
										code: 'Other',
									})}
								>
									Other
								</option>
							</select>
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

						<input type='submit' className='editor-submit' />
					</form>
				</li>
			</ul>
		</div>
	);
};

export default HazardousMaterialEditor;
