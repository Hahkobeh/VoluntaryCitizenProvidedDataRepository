import React, { useEffect } from 'react';
import { useState } from 'react';
import {
	Property,
	TelephoneInfo,
	Person,
	Vehicle,
	Telephone,
} from '../../interfaces';
import { getPersonNameAPI } from '../../API';

type Props = {
	result: Property | TelephoneInfo | any;
	setSelected: (
		type: string,
		id: number,
		e?: React.MouseEvent<HTMLElement>
	) => void;
};

const Result = ({ result, setSelected }: Props) => {
	const keys: string[] = Object.keys(result);
	let type: string = '';
	let id = -1;
	let selectable = false;
	const [name, setName] = useState('');
	useEffect(() => {
		if (
			(result as any).propertyId !== undefined ||
			(result as any).personId !== undefined
		) {
			getPersonNameAPI((result as any).userId).then((res) => {
				setName(res.data);
			});
		} else if ((result as any).second !== undefined) {
			getPersonNameAPI((result as any).second.userId).then((res) => {
				setName(res.data);
			});
		}
	}, [result]);

	if (keys.find((key) => key === 'personId')) {
		type = 'person';
		id = result['personId'];
		selectable = true;
	} else if (keys.find((key) => key === 'first')) {
		type = 'person';
		id = result.first['personId'];
		selectable = true;
	} else if (keys.find((key) => key === 'propertyId')) {
		type = 'property';
		id = result['propertyId'];
		selectable = true;
	}

	const loadItem = (key: string, value: string, index: number) => {
		return (
			<li key={key + value + index}>
				<p>{key}</p>
				<p>{value}</p>
			</li>
		);
	};
	const fillItem = (key: string, index: number) => {
		switch (key) {
			case 'first':
				return Object.keys(result.first).map((key2) => {
					if (
						result.first[key2] === null ||
						result.first[key2] === undefined ||
						result.first[key2] === '' ||
						key2 === 'personId' ||
						key2 === 'verified'
					) {
						return;
					}
					return loadItem(key2, result.first[key2], index);
				});
			case 'second':
				return Object.keys(result.second).map((key2) => {
					if (
						result.second[key2] === null ||
						result.second[key2] === undefined ||
						result.second[key2] === '' ||
						key2 === 'userId' ||
						key2 === 'personId' ||
						key2 === 'personRelationship'
					) {
						return;
					}
					return loadItem(key2, result.second[key2], index);
				});
			default:
				switch (key) {
					case 'userId':
						return;
					case 'personId':
						return;
					case 'propertyId':
						return;
					case 'personRelationship':
						return;
					case 'wheelchair':
						return loadItem(key, result[key] ? 'Yes' : 'No', index);
					default:
						return loadItem(key, result[key], index);
				}
		}
	};

	return (
		<ul
			className={'result' + (selectable ? ' selectable' : '')}
			onClick={() => setSelected(type, id)}
		>
			{result.personId !== undefined ? (
				<li>
					<h3>
						{(result as Person).personGivenName}{' '}
						{(result as Person).personSurName}
					</h3>
					{name &&
					(result as Person).personRelationship !== 'user' ? (
						<div>
							{(result as Person).personRelationship + ' of '}
							<br />
							<div
								className='person-name'
								onClick={(e) =>
									setSelected('person-user', result.userId, e)
								}
							>
								{name}
							</div>
						</div>
					) : (
						<div></div>
					)}
					<p>
						{(result as Person).personBirthDate}{' '}
						{(result as Person).personSexCode}
					</p>
				</li>
			) : result.propertyId !== undefined ? (
				<li>
					<h3>
						{(result as Property).hno +
							' ' +
							((result as Property).hns
								? (result as Property).hns + ' '
								: '') +
							(result as Property).rd +
							' ' +
							(result as Property).sts +
							' ' +
							((result as Property).pod
								? (result as Property).pod + ' '
								: '')}
					</h3>
					{name ? (
						<p
							className='person-name'
							onClick={(e) =>
								setSelected('person-user', result.userId, e)
							}
						>
							{name}
						</p>
					) : (
						''
					)}
					<p>
						{(result as Property).a3 +
							', ' +
							(result as Property).a1}
					</p>
				</li>
			) : result.first !== undefined ? (
				<li>
					<h3>
						{'(' +
							result.first.telephoneNumber.slice(0, 3) +
							') ' +
							result.first.telephoneNumber.slice(3, 6) +
							'-' +
							result.first.telephoneNumber.slice(6, 10) +
							' ' +
							result.second.personGivenName +
							' ' +
							result.second.personSurName}
					</h3>
					{name && result.second.personRelationship !== 'user' ? (
						<div>
							{result.second.personRelationship + ' of '}
							<br />
							<div
								className='person-name'
								onClick={(e) =>
									setSelected(
										'person-user',
										result.second.userId,
										e
									)
								}
							>
								{name}
							</div>
						</div>
					) : (
						<div></div>
					)}
					<p>
						{result.second.personBirthDate}{' '}
						{result.second.personSexCode}
					</p>
				</li>
			) : (
				<li>
					<h3>
						{(result as Vehicle).registrationPlateIdentification +
							' '}
					</h3>
					<div></div>
					<p>
						{(result as Vehicle).vehicleMake +
							' ' +
							(result as Vehicle).vehicleModel}
					</p>
				</li>
			)}
		</ul>
	);
};

export default Result;
