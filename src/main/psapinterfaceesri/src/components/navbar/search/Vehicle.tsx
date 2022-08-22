import React from 'react';
import { VehicleSearchInfo } from '../../../interfaces';

type Props = {
	vehicleSearch: VehicleSearchInfo;
	setVehicleSearch: React.Dispatch<React.SetStateAction<VehicleSearchInfo>>;
	handleVehicleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Vehicle = ({
	vehicleSearch,
	setVehicleSearch,
	handleVehicleSearch,
}: Props) => {
	return (
		<form onSubmit={handleVehicleSearch} className='search-form'>
			<div>
				<label>
					License Plate Number
					<input
						type='text'
						value={vehicleSearch.registrationPlateIdentification}
						onChange={(e) =>
							setVehicleSearch({
								...vehicleSearch,
								registrationPlateIdentification: e.target.value,
							})
						}
					/>
				</label>
				<label>
					Make
					<input
						type='text'
						value={vehicleSearch.vehicleMake}
						onChange={(e) =>
							setVehicleSearch({
								...vehicleSearch,
								vehicleMake: e.target.value,
							})
						}
					/>
				</label>
				<label>
					Model
					<input
						type='text'
						value={vehicleSearch.vehicleModel}
						onChange={(e) =>
							setVehicleSearch({
								...vehicleSearch,
								vehicleModel: e.target.value,
							})
						}
					/>
				</label>
			</div>
			<input className='button submit-search' type='submit' value='Search'/>
		</form>
	);
};

export default Vehicle;
