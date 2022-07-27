import React, { MutableRefObject, SetStateAction } from 'react';
import { useEffect } from 'react';
import { Property } from '../../interfaces';
import searchIcon from '../../images/search.png';

type Props = {
	mapRef: MutableRefObject<google.maps.Map | undefined>;

	radius: number;
	selected: google.maps.LatLngLiteral;
	markers: Property[];
	handleProximitySearch: any;
};

const List = ({
	mapRef,
	markers,
	selected,
	radius,
	handleProximitySearch,
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
								markers,
								selected.lat,
								selected.lng,
								radius
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
								marker.hno + ' ' + marker.rd + ' ' + marker.sts
							}
							onClick={() =>
								mapRef.current!.panTo({
									lat: marker.lat,
									lng: marker.lng,
								})
							}
						>
							{marker.hno + ' ' + marker.rd + ' ' + marker.sts}
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default List;
