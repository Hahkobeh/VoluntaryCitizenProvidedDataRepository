import React from 'react';
import { PropertySearchInfo } from '../../../interfaces';

type Props = {
	propertySearch: PropertySearchInfo;
	setPropertySearch: React.Dispatch<React.SetStateAction<PropertySearchInfo>>;
	handlePropertySearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Property = ({
	propertySearch,
	setPropertySearch,
	handlePropertySearch,
}: Props) => {
	return (
		<form onSubmit={handlePropertySearch} className='search-form'>
			<div>
				<label>
					Address
					<input type='text' />
				</label>
			</div>

			{/*<label>
				House Number and Suffix (eg. 12 2)
				<input
					type='text'
					value={propertySearch.hnos}
					onChange={(e) =>
						setPropertySearch({
							...propertySearch,
							hnos: e.target.value,
						})
					}
				/>
			</label>
			<label>
				Road Name
				<input
					type='text'
					value={propertySearch.rd}
					onChange={(e) =>
						setPropertySearch({
							...propertySearch,
							rd: e.target.value,
						})
					}
				/>
			</label>
			<label>
				Street Suffix (eg. Street)
				<input
					type='text'
					value={propertySearch.sts}
					onChange={(e) =>
						setPropertySearch({
							...propertySearch,
							sts: e.target.value,
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
				<input
					type='text'
					value={propertySearch.a1}
					onChange={(e) =>
						setPropertySearch({
							...propertySearch,
							a1: e.target.value,
						})
					}
				/>
			</label>*/}

			<input
				className='button submit-search'
				type='submit'
				value='Search'
			/>
		</form>
	);
};

export default Property;
