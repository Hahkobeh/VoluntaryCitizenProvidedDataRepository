import React from 'react';
import { PropertySearchInfo } from '../../../interfaces';
import { propertySearchAPI } from '../../../API';

type Props = {
	propertySearch: PropertySearchInfo;
	setPropertySearch: React.Dispatch<React.SetStateAction<PropertySearchInfo>>;
	handlePropertySearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const provincesList = [
	{ name: 'Alberta', code: 'AB' },
	{ name: 'British Columbia', code: 'BC' },
	{ name: 'Manitoba', code: 'MB' },
	{ name: 'New Brunswick', code: 'NB' },
	{ name: 'Newfoundland and Labrador', code: 'NL' },
	{ name: 'Northwes Territories', code: 'NT' },
	{ name: 'Nova Scotia', code: 'NS' },
	{ name: 'Nunavut', code: 'NU' },
	{ name: 'Ontario', code: 'ON' },
	{ name: 'Prince Edward Island', code: 'PE' },
	{ name: 'Quebec', code: 'QC' },
	{ name: 'Saskatchewan', code: 'SK' },
	{ name: 'Yukon', code: 'YT' },
];

const Property = ({
	propertySearch,
	propertySearch: { address },
	setPropertySearch,
	handlePropertySearch,
}: Props) => {
	return (
		<form onSubmit={handlePropertySearch} className='search-form'>
			<div>
				<label>
					Address
					<input
						type='text'
						value={address}
						onChange={(e) =>
							setPropertySearch({
								...propertySearch,
								address: e.target.value,
							})
						}
					/>
				</label>
				<label>
					City
					<input
						type='text'
						value={propertySearch.a3}
						onChange={(e) =>
							setPropertySearch({
								...propertySearch,
								a3: e.target.value,
							})
						}
					/>
				</label>
				<label>
					Province
					<select
						value={propertySearch.a1}
						onChange={(e) =>
							setPropertySearch({
								...propertySearch,
								a1: e.target.value,
							})
						}
					>
						<option value=''> </option>
						{provincesList.map((prov) => (
							<option value={prov.code}>{prov.name}</option>
						))}
					</select>
				</label>
			</div>

		

			<input
				className='button submit-search'
				type='submit'
				value='Search'
			/>
		</form>
	);
};

export default Property;
