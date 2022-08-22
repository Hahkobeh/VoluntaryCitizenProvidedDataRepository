import React, { useState } from 'react';
import {
	SearchInfo,
	SearchObjects,
	RequestedDataObjects,
} from '../../interfaces';
import Person from './search/Person';
import Property from './search/Property';
import Telephone from './search/Telephone';
import Vehicle from './search/Vehicle';
import { PSAPUser } from '../../interfaces';

type Props = {
	searchObjects: SearchObjects;
	requestedDataObjects: RequestedDataObjects;
	setRequestedDataObjects: React.Dispatch<
		React.SetStateAction<RequestedDataObjects>
	>;
};

const Search = ({
	searchObjects: {
		personSearch,
		handlePersonSearch,
		updatePersonSearch,
		telephoneSearch,
		setTelephoneSearch,
		handleTelephoneSearch,
		propertySearch,
		setPropertySearch,
		handlePropertySearch,
		vehicleSearch,
		setVehicleSearch,
		handleVehicleSearch,
	},
	requestedDataObjects,
	setRequestedDataObjects,
}: Props) => {
	const [searchType, setSearchType] = useState('telephone');

	const loadForm = () => {
		switch (searchType) {
			case 'vehicle':
				return (
					<Vehicle
						vehicleSearch={vehicleSearch}
						handleVehicleSearch={handleVehicleSearch}
						setVehicleSearch={setVehicleSearch}
					/>
				);
			case 'property':
				return (
					<Property
						propertySearch={propertySearch}
						handlePropertySearch={handlePropertySearch}
						setPropertySearch={setPropertySearch}
					/>
				);
			case 'person':
				return (
					<Person
						personSearch={personSearch}
						handlePersonSearch={handlePersonSearch}
						updatePersonSearch={updatePersonSearch}
					/>
				);
			default:
				return (
					<Telephone
						telephoneSearch={telephoneSearch}
						setTelephoneSearch={setTelephoneSearch}
						handleTelephoneSearch={handleTelephoneSearch}
					/>
				);
		}
	};

	const loadDataSelectorMenu = () => {
		return (
			<ul className='search-data-selector'>
				<li>
					<label>
						<p>Fire</p>
						<input
							type='checkbox'
							checked={requestedDataObjects.fire}
							onChange={() =>
								setRequestedDataObjects({
									fire: !requestedDataObjects.fire,
									police: requestedDataObjects.police,
									medical: requestedDataObjects.medical,
								})
							}
							disabled={!personSearch.psapUser.fire}
						/>
					</label>
				</li>
				<li>
					<label>
						<p>Police</p>
						<input
							type='checkbox'
							checked={requestedDataObjects.police}
							onChange={() =>
								setRequestedDataObjects({
									fire: requestedDataObjects.fire,
									police: !requestedDataObjects.police,
									medical: requestedDataObjects.medical,
								})
							}
							disabled={!personSearch.psapUser.police}
						/>
					</label>
				</li>
				<li>
					<label>
						<p>Medical</p>
						<input
							type='checkbox'
							checked={requestedDataObjects.medical}
							onChange={() =>
								setRequestedDataObjects({
									fire: requestedDataObjects.fire,
									police: requestedDataObjects.police,
									medical: !requestedDataObjects.medical,
								})
							}
							disabled={!personSearch.psapUser.medical}
						/>
					</label>
				</li>
			</ul>
		);
	};

	return (
		<div className='navbar-second'>
			<ul className='search-list'>
				<li
					className={
						'search-list-item' +
						(searchType === 'telephone' ? ' selected' : '')
					}
					onClick={() => setSearchType('telephone')}
				>
					Telephone
				</li>
				<li
					className={
						'search-list-item' +
						(searchType === 'person' ? ' selected' : '')
					}
					onClick={() => setSearchType('person')}
				>
					Person
				</li>

				<li
					className={
						'search-list-item' +
						(searchType === 'property' ? ' selected' : '')
					}
					onClick={() => setSearchType('property')}
				>
					Property
				</li>
				<li
					className={
						'search-list-item' +
						(searchType === 'vehicle' ? ' selected' : '')
					}
					onClick={() => setSearchType('vehicle')}
				>
					Vehicle
				</li>
			</ul>

			{loadForm()}
			{loadDataSelectorMenu()}
		</div>
	);
};

export default Search;
