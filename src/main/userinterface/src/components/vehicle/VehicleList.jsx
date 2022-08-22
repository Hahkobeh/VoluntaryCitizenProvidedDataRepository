import axios from 'axios';
import React from 'react';
import { API_BASE_URL } from '../../constants';
import Vehicle from './Vehicle';

function VehicleList({ vehicles, reloadVehicles, onSelect }) {
	const deleteVehicle = (vehicle, e) => {
		e.stopPropagation();

		axios
			.delete(`${API_BASE_URL}/api/user/v1/vehicle/delete`, {
				data: vehicle,
			})
			.then(() => {
				reloadVehicles();
			});
	};
	return (
		<div className='list-container'>
			<h2 className='title'>Vehicles</h2>
			<ul className='list'>
				{vehicles.map((vehicle) => (
					<Vehicle
						vehicle={vehicle}
						key={vehicle.registrationPlateIdentification}
						deleteVehicle={deleteVehicle}
						onSelect={onSelect}
					/>
				))}
			</ul>
		</div>
	);
}

export default VehicleList;
