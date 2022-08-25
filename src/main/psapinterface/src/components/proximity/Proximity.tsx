import React, { useEffect } from 'react';
import List from './List';
import Map from './Map';
import '../../styles/proximity.scss';
import { useRef, useState } from 'react';
import { Property, PropertyInfo } from '../../interfaces';
import { useJsApiLoader } from '@react-google-maps/api';
import { ProximityCheckAPI } from '../../API';
import GooglePlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-google-places-autocomplete';

const libraries: (
	| 'places'
	| 'drawing'
	| 'geometry'
	| 'localContext'
	| 'visualization'
)[] = ['places'];

type Props = {
	handleProximitySearch: any;
};

const Proximity = ({ handleProximitySearch }: Props) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyDcNZ1f3Z5Y76GbG9-j4kZeROO5Zn9hmjc',
		libraries,
	});

	const mapRef = useRef<google.maps.Map>();

	const [show, setShow] = useState(false);

	const [map, setMap] = useState<google.maps.Map | null>(null);

	const [markers, setMarkers] = useState<PropertyInfo[]>([]);

	const [radius, setRadius] = useState(1000);

	const [selected, setSelected] = useState<google.maps.LatLngLiteral>({
		lat: 0,
		lng: 0,
	});

	const [selectedMarker, setSelectedMarker] = useState<number>(-1);

	useEffect(() => {
		if (map) setShow(true);
	}, [map]);

	useEffect(() => {
		if (selected.lat === 0 && selected.lng === 0) return;
		ProximityCheckAPI(selected.lat, selected.lng, radius).then((res) => {
			console.log(res.data);
			setMarkers(res.data);
		});
	}, [selected, radius]);

	const [value, setValue] = useState<any>(null);

	useEffect(() => {
		console.log(value);
		if (!value) return;

		geocodeByAddress(value.label).then((res) => {
			console.log(res);
			getLatLng(res[0]).then(({ lat, lng }) => {
				setSelected({ lat, lng });
				mapRef.current!.panTo({ lat, lng });
			});
		});
	}, [value]);

	return (
		<div className='p-container'>

			<Map
				markers={markers}
				mapRef={mapRef}
				map={map}
				setMap={setMap}
				selected={selected}
				setSelected={setSelected}
				isLoaded={isLoaded}
				radius={radius}
				setRadius={setRadius}
				selectedMarker={selectedMarker}
				setSelectedMarker={setSelectedMarker}
			/>
			<div className='p-search'>
				{isLoaded && show && (
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
			<List
				markers={markers}
				mapRef={mapRef}
				selected={selected}
				radius={radius}
				handleProximitySearch={handleProximitySearch}
				selectedMarker={selectedMarker}
				setSelectedMarker={setSelectedMarker}
			/>
		</div>
	);
};

export default Proximity;
