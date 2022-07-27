import { InfoWindow } from '@react-google-maps/api';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Select from 'react-select';

import GooglePlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-google-places-autocomplete';

type Props = {
	setSelected: React.Dispatch<SetStateAction<google.maps.LatLngLiteral>>;
	radius: number;
	setRadius: React.Dispatch<SetStateAction<number>>;
	isLoaded: boolean;
};

const Search = ({ setSelected, radius, setRadius, isLoaded }: Props) => {
	const [value, setValue] = useState<any>(null);

	useEffect(() => {
		console.log(value);
		if (!value) return;

		geocodeByAddress(value.label).then((res) => {
			console.log(res);
			getLatLng(res[0]).then(({ lat, lng }) => setSelected({ lat, lng }));
		});
	}, [value]);

	return (
		<div className='p-search'>
			{isLoaded && (
				<GooglePlacesAutocomplete
					apiKey='AIzaSyDcNZ1f3Z5Y76GbG9-j4kZeROO5Zn9hmjc'
					autocompletionRequest={{
						componentRestrictions: {
							country: ['us', 'ca'],
						},
					}}
					selectProps={{ value, onChange: setValue }}
				/>
			)}
			<select
				value={radius}
				onChange={(e) => setRadius(parseInt(e.target.value))}
			>
				<option value={5}>50 m</option>
				<option value={100}>100 m</option>
				<option value={500}>500 m</option>
				<option value={1000}>1 km</option>
				<option value={5000}>5 km</option>
				<option value={10000}>10 km</option>
			</select>
		</div>
	);
};

export default Search;
