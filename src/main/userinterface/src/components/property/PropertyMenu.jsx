import React, { useState } from 'react';
import '../../style/editor.scss';
import PropertyEditor from './editors/PropertyEditor';
import HazardousMaterialEditor from './editors/HazardousMaterialEditor';
import PropertyRelationshipEditor from './editors/PropertyRelationshipEditor';

const PropertyMenu = ({
	selectedProperty,
	onSelect,
	reloadProperties,
	persons,
}) => {
	const [selected, setSelected] = useState('property');

	const navigate = () => {
		switch (selected) {
			case 'property':
				return (
					<PropertyEditor
						selectedProperty={selectedProperty}
						reloadProperties={reloadProperties}
					/>
				);
			case 'hazardous-material':
				return (
					<HazardousMaterialEditor
						propertyId={selectedProperty.propertyId}
					/>
				);
			case 'relationship':
				return (
					<PropertyRelationshipEditor
						propertyId={selectedProperty.propertyId}
						persons={persons}
					/>
				);
			default:
				setSelected('property');
		}
	};

	return (
		<>
			<h1 className='menu-name'>
				{selectedProperty.hno} {selectedProperty.rd}{' '}
				{selectedProperty.sts}
			</h1>
			<ul className='menu-list'>
				<li
					className={
						'menu-item' +
						(selected === 'property' ? ' current' : '')
					}
					onClick={() => setSelected('property')}
				>
					<h2>Property</h2>
				</li>
				<li
					className={
						'menu-item' +
						(selected === 'hazardous-material' ? ' current' : '')
					}
					onClick={() => setSelected('hazardous-material')}
				>
					<h2>Hazardous Materials</h2>
				</li>
				<li
					className={
						'menu-item' +
						(selected === 'relationship' ? ' current' : '')
					}
					onClick={() => setSelected('relationship')}
				>
					<h2>Relevant People</h2>
				</li>
				<li
					className='menu-item return'
					onClick={() => onSelect(null, 'property')}
				>
					<h2>Return</h2>
				</li>
			</ul>
			{navigate()}
		</>
	);
};

export default PropertyMenu;
