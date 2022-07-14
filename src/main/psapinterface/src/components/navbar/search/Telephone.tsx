import React from 'react';
import { TelephoneSearchInfo } from '../../../interfaces';

type Props = {
	telephoneSearch: TelephoneSearchInfo;
	setTelephoneSearch: React.Dispatch<
		React.SetStateAction<TelephoneSearchInfo>
	>;
	handleTelephoneSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Telephone = ({
	telephoneSearch,
	setTelephoneSearch,
	handleTelephoneSearch,
}: Props) => {
	return (
		<form onSubmit={handleTelephoneSearch} className='search-form'>
			<div>
				<label>
					Telephone
					<input
						type='text'
						value={telephoneSearch.telephoneNumber}
						onChange={(e) =>
							setTelephoneSearch({
								...telephoneSearch,
								telephoneNumber: e.target.value,
							})
						}
					/>
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

export default Telephone;
