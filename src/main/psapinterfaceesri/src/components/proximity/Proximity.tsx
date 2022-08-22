import Point from '@arcgis/core/geometry/Point';
import geometryService from '@arcgis/core/rest/geometryService';
import MapView from '@arcgis/core/views/MapView';
import React, { useEffect, useRef, useState } from 'react';
import { ProximityCheckAPI, proximityGetAll } from '../../API';
import { Property, PropertyInfo } from '../../interfaces';
import '../../styles/proximity.scss';
import List from './List';
import Map from './Map';

type Props = {
	handleProximitySearch: any;
};

const Proximity = ({ handleProximitySearch }: Props) => {
	const [view, setView] = useState<MapView>();

	const [location, setLocation] = useState<Point>();

	const [radius, setRadius] = useState(1000);

	const [selected, setSelected] = useState(0);

	const [properties, setProperties] = useState<PropertyInfo[]>([]);

	//IDs of properties who are inside the search
	const [selectedProperties, setSelectedProperties] = useState<
		PropertyInfo[]
	>([]);

	useEffect(() => {
		proximityGetAll().then((res) => {
			setProperties(res.data);
		});
	}, []);

	useEffect(() => {
		if (
			selectedProperties.length === 0 ||
			!selectedProperties.find(
				(prop) => prop.property.propertyId === selected
			)
		) {
			const property = properties.find(
				(prop) => prop.property.propertyId === selected
			);
			if (property) {
				setSelectedProperties([property]);
			}
		}
	}, [selected]);

	useEffect(() => {
		if (properties.length === 0) return;
		if (!location) return;
		setSelectedProperties(
			properties.filter((prop) => {
				const { lat: lat1, lng: lon1 } = prop.property;
				const { latitude: lat2, longitude: lon2 } = location;
				const latDiff = Math.abs(lat1 - lat2) * 111000 * 1.6;
				const lonDiff =
					((Math.abs(lon1 - lon2) *
						40075 *
						Math.cos(((lat1 - lat2) / 2) * (Math.PI / 180))) /
						360) *
					1000;

				if (lonDiff * lonDiff + latDiff * latDiff <= radius * radius)
					return true;
				return false;
			})
		);
	}, [radius, location]);

	return (
		<div className='p-container'>
			<Map
				properties={properties}
				selected={selected}
				setSelected={setSelected}
				location={location}
				setLocation={setLocation}
				radius={radius}
				setRadius={setRadius}
				view={view}
				setView={setView}
			/>
			<List
				selected={selected}
				setSelected={setSelected}
				handleProximitySearch={handleProximitySearch}
				location={location}
				radius={radius}
				properties={selectedProperties}
				view={view}
			/>
		</div>
	);
};

function measure(lat1: number, lon1: number, lat2: number, lon2: number) {
	// generally used geo measurement function
	var R = 6378.137; // Radius of earth in KM
	var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
	var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos((lat1 * Math.PI) / 180) *
			Math.cos((lat2 * Math.PI) / 180) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d * 1000; // meters
}

export default Proximity;
