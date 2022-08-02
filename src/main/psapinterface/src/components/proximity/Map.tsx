import React, {
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Property, PropertyInfo } from '../../interfaces';

import { GoogleMap, Marker, Circle, InfoWindow } from '@react-google-maps/api';
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
	markers: PropertyInfo[];
	setMap: React.Dispatch<SetStateAction<google.maps.Map | null>>;
	setSelected: React.Dispatch<SetStateAction<google.maps.LatLngLiteral>>;
	selected: google.maps.LatLngLiteral;
	isLoaded: boolean;
	radius: number;
	setRadius: React.Dispatch<SetStateAction<number>>;
	selectedMarker: number;
	setSelectedMarker: React.Dispatch<SetStateAction<number>>;
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
	selectedMarker,
	setSelectedMarker,
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
		if (
			!markers.find(
				(marker) => marker.property.propertyId === selectedMarker
			)
		) {
			setSelectedMarker(-1);
		}
	}, [markers]);

	const getInfoWindow = () => {
		console.log('here');
		const info = markers.find(
			(marker) => marker.property.propertyId === selectedMarker
		);
		if (!info) return;
		if (info.hazardousMaterials.length === 0) return;
		return (
			<InfoWindow
				position={{
					lat: info.property.lat,
					lng: info.property.lng,
				}}
				onCloseClick={() => setSelectedMarker(-1)}
			>
				<div>
					<ul style={{ display: 'flex', flexDirection: 'column' }}>
						{info.hazardousMaterials?.map((mat: any, i) => (
							<li key={i}>
								{mat.commonName +
									' ' +
									mat.substanceCategory +
									' ' +
									mat.substanceContainer +
									' ' +
									mat.location +
									' ' +
									mat.quantity}
							</li>
						))}
					</ul>
				</div>
			</InfoWindow>
		);
	};

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
						position={{
							lat: marker.property.lat,
							lng: marker.property.lng,
						}}
						icon={{
							url:
								marker.property.propertyId === selectedMarker
									? 'http://maps.google.com/mapfiles/marker_orange.png'
									: marker.hazardousMaterials.length
									? 'http://maps.google.com/mapfiles/dd-end.png'
									: 'http://maps.google.com/mapfiles/marker_yellow.png',
						}}
						onClick={() => {
							console.log(marker.property.propertyId);
							setSelectedMarker(marker.property.propertyId);
						}}
					/>
				))}
				{selectedMarker !== -1 && getInfoWindow()}
				{/* {selectedMarker !== -1 && (
					<InfoWindow
						position={{
							lat: selectedMarker.property.lat,
							lng: selectedMarker.property.lng,
						}}
					>
						<div>
							<ul>
								{selectedMarker.hazardousMaterials?.map((mat) =>
									JSON.stringify(mat)
								)}
							</ul>
						</div>
					</InfoWindow>
				)} */}
			</GoogleMap>
		</>
	) : (
		<></>
	);
};

export default Map;
