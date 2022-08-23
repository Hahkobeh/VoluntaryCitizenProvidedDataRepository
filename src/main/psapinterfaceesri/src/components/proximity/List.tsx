import Point from '@arcgis/core/geometry/Point';
import MapView from '@arcgis/core/views/MapView';
import React from 'react';
import searchIcon from '../../images/search.png';
import {  PropertyInfo } from '../../interfaces';

type Props = {

	location: Point | undefined;
	radius: number;
	handleProximitySearch: any;

	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	properties: PropertyInfo[];
	view: MapView | undefined;
};

const List = ({
	location,
	radius,
	handleProximitySearch,
	selected,
	setSelected,
	properties,
	view,
}: Props) => {
	const selectedProp = properties.find(
		(prop) => prop.property.propertyId === selected
	);

	return (
		<div className='p-list'>
			<h1>
				Properties
				<img
					src={searchIcon}
					alt='search'
					className={properties.length ? '' : 'disabled'}
					onClick={() => {
						if (properties.length > 0) {
							if (!location && !selectedProp) return;
							handleProximitySearch(
								properties.map((prop) => prop.property),
								location
									? location.latitude
									: selectedProp!.property.lat,
								location
									? location.latitude
									: selectedProp!.property.lng,
								radius,
								selectedProp ? selectedProp : null
							);
						}
					}}
				/>
			</h1>

			<ul>
				{properties.length === 0 ? (
					<li className={properties.length ? '' : 'disabled'}>
						No properties
					</li>
				) : (
					properties.map((prop) => (
						<li
							key={
								prop.property.hno +
								' ' +
								prop.property.rd +
								' ' +
								prop.property.sts
							}
							className={
								prop.property.propertyId === selected
									? 'selected'
									: ''
							}
							style={
								prop.hazardousMaterials.length > 0
									? { textDecoration: 'underline' }
									: {}
							}
							onClick={() => {
								const { lat, lng } = prop.property;
								view?.goTo({ center: [lng, lat] });
								setSelected(prop.property.propertyId);
							}}
						>
							{prop.property.hno +
								' ' +
								prop.property.rd +
								' ' +
								prop.property.sts}
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default List;
