import React from 'react';
import { PersonSearchInfo, SearchInfo } from '../../../interfaces';

type Props = {
	setSearch: (info: SearchInfo) => void;
};

const Person = ({ setSearch }: Props) => {

	

	

	return (
		<>
			<label>
				Name
				<input
					type='text'
					onChange={(data) => 
						setSearch({
							type: 'person',
							userInfo: JSON.parse(
								sessionStorage.getItem('user') || '{}'
							),
							personName: data.target.value,
					})
					value={}
				}
				/>
			</label>
			<label>
				Date of birth
				<input type='text' />
			</label>
			<label>
				<input type='text' />
			</label>
		</>
	);
};

export default Person;
