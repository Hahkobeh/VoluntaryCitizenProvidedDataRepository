import React, { useState } from 'react';
import VehicleEditor from './editors/VehicleEditor';

const VehicleMenu = ({ selectedVehicle, onSelect, reloadVehicles }) => {
	const [selected, setSelected] = useState('vehicle');

	const navigate = () => {
		switch (selected) {
			case 'vehicle':
				return (
					<VehicleEditor
						selectedVehicle={selectedVehicle}
						reloadVehicles={reloadVehicles}
					/>
				);
			default:
				setSelected('vehicle');
		}
	};

	return (
		<>
			<h1 className='menu-name'>
				{selectedVehicle.registrationPlateIdentification},{' '}
				{selectedVehicle.vehicleMake} {selectedVehicle.vehicleModel}
			</h1>
			<ul className='menu-list'>
				<li
					className={
						'menu-item' + (selected === 'vehicle' ? ' current' : '')
					}
					onClick={() => setSelected('vehicle')}
				>
					<h2>Vehicle</h2>
				</li>
				<li
					className='menu-item return'
					onClick={() => onSelect(null, 'vehicle')}
				>
					<h2>Return</h2>
				</li>
			</ul>
			{navigate()}
		</>
	);
};

export default VehicleMenu;
