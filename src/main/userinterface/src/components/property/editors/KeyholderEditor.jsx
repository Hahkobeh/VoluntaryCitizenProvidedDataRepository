import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const KeyholderEditor = ({ propertyId }) => {
	const [keyholders, setKeyholders] = useState([]);
	const [newKeyholder, setNewKeyholder] = useState({
		propertyId: propertyId,
		telephoneNumber: '',
		personFullName: '',
	});

	useEffect(() => {
		getKeyholders();
		//eslint-disable-next-line
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		console.log(newKeyholder);
		if (newKeyholder.telephoneNumber === '') return;
		axios
			.post(`${API_BASE_URL}/api/user/v1/keyholder/create`, newKeyholder)
			.then(() => {
				setNewKeyholder({
					propertyId: propertyId,
					telephoneNumber: '',
					personFullName: '',
				});
				getKeyholders();
			});
	};

	const handleDelete = (keyholder) => {
		axios
			.delete(`${API_BASE_URL}/api/user/v1/keyholder/delete`, {
				data: keyholder,
			})
			.then(() => {
				getKeyholders();
			});
	};

	const getKeyholders = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/keyholder/${propertyId}`)
			.then((res) => {
				setKeyholders(res.data);
			});
	};

	return (
		<div className='editor'>
			<h2>Keyholders</h2>
			<ul className='editor-list'>
				{keyholders.map((keyholder, index) => (
					<li key={index}>
						{keyholder.personFullName} <br />
						{'(' +
							keyholder.telephoneNumber.slice(0, 3) +
							') ' +
							keyholder.telephoneNumber.slice(3, 6) +
							'-' +
							keyholder.telephoneNumber.slice(6, 10)}
						<img
							src={Delete}
							alt='delete relationship'
							onClick={() => handleDelete(keyholder)}
						/>
					</li>
				))}
				<li className='li-form' key={-1}>
					<h3>Add Keyholder</h3>
					<form onSubmit={handleAdd}>
						<label>
							Full Name
							<input
								type='text'
								onChange={(data) =>
									setNewKeyholder({
										...newKeyholder,
										personFullName: data.target.value,
									})
								}
								value={newKeyholder.personFullName}
							/>
						</label>
						<label>
							Telephone Number
							<input
								type='text'
								onChange={(data) =>
									setNewKeyholder({
										...newKeyholder,
										telephoneNumber: data.target.value,
									})
								}
								value={newKeyholder.telephoneNumber}
							/>
						</label>
						<input type='submit' className='editor-submit' />
					</form>
				</li>
			</ul>
		</div>
	);
};

export default KeyholderEditor;
