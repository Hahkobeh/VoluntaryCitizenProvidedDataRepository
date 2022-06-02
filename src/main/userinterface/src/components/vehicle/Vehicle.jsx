import React from 'react';
import Delete from '../../images/delete.svg';

function Vehicle({
	vehicle,
	vehicle: {
		registrationPlateIdentification,
		provinceCode,
		vehicleExteriorColour,
		vehicleMake,
		vehicleModel,
		year,
	},
	onSelect,
	deleteVehicle,
}) {
	return (
		<li className='list-item' onClick={() => onSelect(vehicle, 'vehicle')}>
			<h1>
				{registrationPlateIdentification}, {vehicleMake} {vehicleModel}
				<br />
				<span>{vehicleExteriorColour}</span>
			</h1>
			<img
				src={Delete}
				alt='delete vehicle'
				className='delete'
				onClick={(e) => deleteVehicle(vehicle, e)}
			/>
		</li>
	);
}

export default Vehicle;
