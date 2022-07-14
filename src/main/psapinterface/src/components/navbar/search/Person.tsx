import React from 'react';
import { PersonSearchInfo, SearchInfo } from '../../../interfaces';

type Props = {
	personSearch: PersonSearchInfo;
	updatePersonSearch: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	handlePersonSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Person = ({
	personSearch,
	updatePersonSearch,
	handlePersonSearch,
}: Props) => {
	return (
		<form onSubmit={handlePersonSearch} className='search-form'>
			<div>
				<label>
					Name
					<input
						type='text'
						name='personName'
						onChange={updatePersonSearch}
						value={personSearch.personName}
					/>
				</label>
				<label>
					Date of birth
					<input
						type='date'
						name='personBirthDate'
						onChange={updatePersonSearch}
						value={personSearch.personBirthDate}
					/>
				</label>
				<label>
					Sex
					<select
						name='personSexCode'
						value={personSearch.personSexCode}
						onChange={updatePersonSearch}
					>
						<option value=''> </option>
						<option value='M'>Male</option>
						<option value='F'>Female</option>
						<option value='X'>Other</option>
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

export default Person;
