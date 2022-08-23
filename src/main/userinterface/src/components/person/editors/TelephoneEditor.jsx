import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../constants';
import Delete from '../../../images/delete.svg';

const TelephoneEditor = ({ personId }) => {
	const [telephones, setTelephones] = useState([]);
	const [newTelephone, setNewTelephone] = useState({
		personId: personId,
		telephoneNumber: '',
		telephoneType: 'Residential Landline',
	});

	useEffect(() => {
		getTelephones();
		//eslint-disable-next-line
	}, []);

	const handleDelete = (telephone) => {
		console.log(telephone);
		axios
			.delete(`${API_BASE_URL}/api/user/v1/telephone/delete`, {
				data: telephone,
			})
			.then((res) => {
				getTelephones();
			});
	};

	const handleAdd = (e) => {
		e.preventDefault();
		console.log(typeof newTelephone.telephoneNumber);
		if (
			newTelephone.telephoneNumber === '' ||
			newTelephone.telephoneType === ''
		) {
			return;
		}

		if (!telephoneValid(newTelephone.telephoneNumber)) {
			return;
		}

		axios
			.post(`${API_BASE_URL}/api/user/v1/telephone/create`, newTelephone)
			.then((res) => {
				setNewTelephone({
					personId: personId,
					telephoneNumber: '',
					telephoneType: 'Residential Landline',
				});
				getTelephones();
			});
	};

	const getTelephones = () => {
		axios
			.get(`${API_BASE_URL}/api/user/v1/telephone/${personId}`)
			.then((res) => {
				setTelephones(res.data);
			});
	};

	const telephoneValid = (input) => {
		const regex = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		return !!input.match(regex);
	};

	return (
		<div className='editor'>
			<h2>Telephones</h2>
			<ul className='editor-list'>
				{telephones.map((telephone) => (
					<li key={telephone.telephoneNumber}>
						{'(' +
							telephone.telephoneNumber.slice(0, 3) +
							') ' +
							telephone.telephoneNumber.slice(3, 6) +
							'-' +
							telephone.telephoneNumber.slice(6, 10) +
							' ' +
							telephone.telephoneType}

						<img
							src={Delete}
							alt='delete this number'
							onClick={() => handleDelete(telephone)}
						/>
					</li>
				))}
				<li key={0} className='li-form'>
					<h3>Add Telephone</h3>
					<form onSubmit={handleAdd}>
						<label>
							Number
							<input
								type='text'
								name='telephoneNumber'
								onChange={(data) =>
									setNewTelephone({
										...newTelephone,
										telephoneNumber: data.target.value,
									})
								}
								value={newTelephone.telephoneNumber}
							/>
						</label>
						<label>
							Type
							<select
								onChange={(e) =>
									setNewTelephone({
										...newTelephone,
										telephoneType: e.target.value,
									})
								}
								value={newTelephone.telephoneType}
							>
								<option>Residential Landline</option>
								<option>Business Landline</option>
								<option>Mobile</option>
							</select>
						</label>
						<input type='submit' className='editor-submit' />
					</form>
				</li>
			</ul>
		</div>
	);
};

export default TelephoneEditor;
