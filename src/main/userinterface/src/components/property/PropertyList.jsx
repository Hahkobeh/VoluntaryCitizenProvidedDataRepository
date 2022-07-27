import axios from 'axios';
import React from 'react';
import { API_BASE_URL } from '../../constants';
import Property from './Property';

const PropertyList = ({ properties, reloadProperties, onSelect }) => {
	const deleteProperty = (propertyId, e) => {
		e.stopPropagation();
		axios
			.delete(`${API_BASE_URL}/api/user/v1/property/delete/${propertyId}`)
			.then(() => {
				reloadProperties();
			});
	};

	return (
		<div className='list-container'>
			<h2 className='title'>Properties</h2>
			<ul className='list'>
				{properties.map((property) => (
					<Property
						property={property}
						key={property.propertyId}
						deleteProperty={deleteProperty}
						onSelect={onSelect}
					/>
				))}
			</ul>
		</div>
	);
};

export default PropertyList;
