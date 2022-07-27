import React, {
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Property } from '../../interfaces';

import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
import Search from './Search';

const containerStyle = {
	width: '75vw',
	height: 'calc(100vh - 80px)',
};

const center = {
	lat: 51.0447,
	lng: -114.0719,
};

const options: any = {
	disableDefaultUI: true,
	fullscreenControl: false,
	zoomControl: true,
	defaultZoom: 10,
	streetViewControl: true,
};

const style = {
	width: '100%',
	height: '100%',
};

type Props = {
	mapRef: MutableRefObject<google.maps.Map | undefined>;
	map: google.maps.Map | null;
	markers: Property[];
	setMap: React.Dispatch<SetStateAction<google.maps.Map | null>>;
	setSelected: React.Dispatch<SetStateAction<google.maps.LatLngLiteral>>;
	selected: google.maps.LatLngLiteral;
	isLoaded: boolean;
	radius: number;
	setRadius: React.Dispatch<SetStateAction<number>>;

	// circleRef: MutableRefObject<google.maps.Circle | undefined>;
	// circle: google.maps.Circle | null;
	// setCircle: React.Dispatch<SetStateAction<google.maps.Circle | null>>;
};

const Map = ({
	markers,
	mapRef,
	map,
	setMap,
	selected,
	setSelected,
	isLoaded,
	radius,
	setRadius,
}: Props) => {
	// const onMapClick = useCallback((e: any) => {
	// 	setMarkers((current) => [
	// 		...current,
	// 		{
	// 			lat: e.latLng.lat(),
	// 			lng: e.latLng.lng(),
	// 			time: new Date(),
	// 		},
	// 	]);
	// }, []);

	const onLoad = useCallback(function callback(map: google.maps.Map) {
		console.log('map loaded');
		mapRef.current = map;
		map.setZoom(12);
		setMap(map);
	}, []);

	const onLoadCircle = useCallback(function callback(
		circle: google.maps.Circle
	) {
		console.log('setting circle ref');

		// circleRef.current = circle;
		// circleRef.current.setCenter(selected);
		// console.log(circleRef.current.getCenter());
	},
	[]);

	const panTo = React.useCallback(({ lat, lng }: any) => {
		if (mapRef.current) {
			mapRef.current.panTo({ lat, lng });
		}
	}, []);

	useEffect(() => {
		//panTo(selected);
	}, [selected]);
	// useEffect(() => {
	// 	console.log(circleRef.current);
	// 	if (circleRef.current) {
	// 		circleRef.current.setCenter(selected);
	// 	}
	// 	console.log(selected);
	// }, [selected]);

	// useEffect(() => {
	// 	if (circleRef.current) {
	// 		circleRef.current.setRadius(radius);
	// 	}
	// }, [radius]);

	// const panTo = useCallback(({ lat, lng }) => {
	// 	mapRef.current.panTo({ lat, lng });
	// 	mapRef.current.setZoom(14);
	// }, []);

	return isLoaded ? (
		<>
			<GoogleMap
				mapContainerClassName='p-map'
				center={center}
				options={options}
				onLoad={onLoad}
				zoom={10}
				onClick={(e: any) => {
					console.log('clicked');
					setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
				}}
			>
				<Circle
					center={selected}
					options={{
						strokeColor: '#FF0000',
						strokeOpacity: 0.8,
						strokeWeight: 2,
						fillColor: '#FF0000',
						fillOpacity: 0.35,
						clickable: false,
						draggable: false,
						editable: false,
						visible: true,
						radius: radius,
						zIndex: 10,
					}}
				/>

				{markers.map((marker, i) => (
					<Marker
						key={i}
						position={{ lat: marker.lat, lng: marker.lng }}
					/>
				))}
			</GoogleMap>
		</>
	) : (
		<></>
	);
};

export default Map;
