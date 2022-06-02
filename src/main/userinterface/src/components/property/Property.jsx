import React from 'react';
import Delete from '../../images/delete.svg';

const Property = ({
	property: { propertyId, a1, a3, rd, sts, hno },
	deleteProperty,
	onSelect,
}) => {
	return (
		<li
			className='list-item'
			onClick={() => onSelect(propertyId, 'property')}
		>
			<h1>
				{hno} {rd} {sts}
				<br />
				<span>
					{a3}, {a1}
				</span>
			</h1>
			<img
				src={Delete}
				alt='delete property'
				className='delete'
				onClick={(e) => deleteProperty(propertyId, e)}
			/>
		</li>
	);
};
export default Property;
