import React from 'react';
import { getProperName } from '../../getProperName';
import {
	PersonInfo,
	PropertyInfo,
	Person,
	Property,
	Vehicle,
} from '../../interfaces';

type Props = {
	selected: PersonInfo | PropertyInfo | any;
	setSelected: (type: string, id: number) => void;
};

const SelectedObject = ({ selected, setSelected }: Props) => {
	const keys = Object.keys(selected!);

	const loadItem = (key: string, value: string) => (
		<li key={key + value}>
			<p>{getProperName(key)}</p>
			<p>{value}</p>
		</li>
	);

	const multipleObjects = (key: string, index: number) => {
		return (
			<li className='result-object' key={index}>
				<h3>{getProperName(key)}</h3>
				<ul className='list1'>
					{selected[key].map((item: any, index: number) => {
						return (
							<li className='item' key={index}>
								<ul className='list2'>
									{Object.keys(item)
										.filter(
											(value) =>
												value !== 'personId' &&
												value !== 'propertyId' &&
												value !== 'verified' &&
												value !== 'severity' &&
												value !== 'hazardousMaterialId'
										)
										.map((key2) => {
											if (key2 === 'keyholder') {
												return loadItem(
													key2,
													item[key2] ? 'Yes' : 'No'
												);
											} else if(key2 === 'telephoneNumber'){
												console.log(item[key2])
												return loadItem(
													key2,
													'(' + item[key2].slice(0, 3) + ') ' + item[key2].slice(3, 6) + '-' + item[key2].slice(6, 10)
												)
											}else {
												return loadItem(
													key2,
													item[key2]
												);
											}
										})}
								</ul>
							</li>
						);
					})}
				</ul>
			</li>
		);
	};

	const singleObjects = (key: string, index: number) => {
		return (
			<li className='result-object' key={index}>
				<h3>{getProperName(key)}</h3>
				<ul className='list2'>
					{Object.keys(selected[key])
						.filter(
							(value) =>
								value !== 'personId' &&
								value !== 'userId' &&
								value !== 'propertyId' &&
								value !== 'personRelationship' &&
								selected[key][value] !== null &&
								selected[key][value] !== ''
						)
						.map((key2) => {
							if (
								key2 === 'wheelchair' ||
								key2 === 'isPregnant'
							) {
								return loadItem(
									key2,
									selected[key][key2] ? 'Yes' : 'No'
								);
							} else if (key2 === 'personRhType') {
								return loadItem(
									key2,
									selected[key][key2]
										? 'Positive'
										: 'Negative'
								);
							} else {
								return loadItem(key2, selected[key][key2]);
							}
						})}
				</ul>
			</li>
		);
	};

	const displayData = () => {
		return (
			<ul className='results-list'>
				{keys
					.filter((key) => selected[key] !== null)
					.map((key, index) => {
						if (
							key === 'person' ||
							key === 'medicalInformation' ||
							key === 'vulnerablePersonInformation' ||
							key === 'property'
						) {
							return singleObjects(key, index);
						} else {
							console.log(selected[key]);
							if (selected[key].length !== 0)
								return multipleObjects(key, index);
						}
					})}
			</ul>
		);
	};

	return (
		<div className='results-container'>
			<h2 className='results-title'>
				{selected.person
					? selected.person?.personGivenName +
					  ' ' +
					  selected.person?.personSurName
					: selected.property.propertyId
					? (selected as PropertyInfo).property.hno +
					  ' ' +
					  ((selected as PropertyInfo).property.hns
							? (selected as PropertyInfo).property.hns + ' '
							: '') +
					  (selected as PropertyInfo).property.rd +
					  ' ' +
					  (selected as PropertyInfo).property.sts +
					  ' ' +
					  (selected as PropertyInfo).property.a3 +
					  ', ' +
					  (selected as PropertyInfo).property.a1
					: selected.first
					? selected.first.telephoneNumber +
					  ' ' +
					  selected.second.personGivenName +
					  ', ' +
					  selected.second.personSurName +
					  ' ' +
					  selected.second.personBirthDate +
					  ' ' +
					  selected.second.personSexCode
					: (selected as Vehicle).registrationPlateIdentification +
					  ' ' +
					  (selected as Vehicle).vehicleMake +
					  ' ' +
					  (selected as Vehicle).vehicleModel}
			</h2>
			{displayData()}
			<button className='button' onClick={() => setSelected('', -1)}>
				Unselect
			</button>
		</div>
	);
};

export default SelectedObject;
