import React, { MutableRefObject, SetStateAction } from 'react';
import { useEffect } from 'react';
import { Property, PropertyInfo } from '../../interfaces';
import searchIcon from '../../images/search.png';

type Props = {
	mapRef: MutableRefObject<google.maps.Map | undefined>;

	radius: number;
	selected: google.maps.LatLngLiteral;
	markers: PropertyInfo[];
	handleProximitySearch: any;

	selectedMarker: number;
	setSelectedMarker: React.Dispatch<SetStateAction<number>>;
};

const List = ({
	mapRef,
	markers,
	selected,
	radius,
	handleProximitySearch,
	selectedMarker,
	setSelectedMarker,
}: Props) => {
	return (
		<div className='p-list'>
			<h1>
				Properties
				<img
					src={searchIcon}
					alt='search'
					className={markers.length ? '' : 'disabled'}
					onClick={() => {
						if (markers.length > 0)
							handleProximitySearch(
								markers.map((marker) => marker.property),
								selected.lat,
								selected.lng,
								radius,
								selectedMarker
									? markers.find(
											(marker) =>
												marker.property.propertyId ===
												selectedMarker
									  )
									: null
							);
					}}
				/>
			</h1>

			<ul>
				{markers.length === 0 ? (
					<li className={markers.length ? '' : 'disabled'}>
						No properties
					</li>
				) : (
					markers.map((marker) => (
						<li
							key={
								marker.property.hno +
								' ' +
								marker.property.rd +
								' ' +
								marker.property.sts
							}
							className={
								marker.property.propertyId === selectedMarker
									? 'selected'
									: ''
							}
							style={
								marker.hazardousMaterials.length > 0
									? { textDecoration: 'underline' }
									: {}
							}
							onClick={() => {
								mapRef.current!.panTo({
									lat: marker.property.lat,
									lng: marker.property.lng,
								});
								setSelectedMarker(marker.property.propertyId);
							}}
						>
							{marker.property.hno +
								' ' +
								marker.property.rd +
								' ' +
								marker.property.sts}
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default List;
