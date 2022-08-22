import React, { useEffect, useState } from 'react';
import {
	Tab,
	PersonInfo,
	SearchInfo,
	RequestedDataObjects,
} from '../../interfaces';
import Result from './Result';
import '../../styles/results.scss';
import {
	getPersonInfoAPI,
	getPropertyInfoAPI,
	getPersonNameAPI,
} from '../../API';
import SelectedObject from './SelectedObject';
import SearchIcon from '../../images/search.png';
import { getPersonInfoByUserIdAPI } from '../../API';
import { getProperName } from '../../getProperName';

type Props = {
	tab: Tab;
	editSelected: (data: any) => void;
	requestedDataObjects: RequestedDataObjects;
};

const Results = ({
	tab: { results, title, searchInfo, selected },
	editSelected,
	requestedDataObjects,
}: Props) => {
	const [showSearch, setShowSearch] = useState(false);

	const setSelected = (
		type: string,
		id: number,
		e?: React.MouseEvent<HTMLElement>
	) => {
		if (e) {
			e.stopPropagation();
		}
		switch (type) {
			case 'property':
				getPropertyInfoAPI(id, requestedDataObjects).then((res) => {
					editSelected(res.data);
				});
				return;
			case 'person':
				getPersonInfoAPI(id, requestedDataObjects).then((res) => {
					editSelected(res.data);
				});
				return;
			case 'person-user':
				getPersonInfoByUserIdAPI(id, requestedDataObjects).then(
					(res) => {
						editSelected(res.data);
					}
				);
				return;

			default:
				editSelected(null);
		}
	};

	const loadSearchInfo = () => {
		const keys = Object.keys(searchInfo);
		console.log(searchInfo);

		return keys.map((key) => {
			switch (key) {
				case 'psapUser':
					return;
				default:
					if ((searchInfo as any)[key] !== '')
						return (
							<p>
								{getProperName(key) + ': '}
								{(searchInfo as any)[key]}
							</p>
						);
			}
		});
	};

	const loadData = () => {
		if (selected === null) {
			return (
				<div className='results-container'>
					<h2 className='results-title'>
						{title} ({results.length})
						<img
							src={SearchIcon}
							alt='search icon'
							className='results-search-icon'
							onMouseEnter={() => setShowSearch(true)}
							onMouseLeave={() => setShowSearch(false)}
						/>
					</h2>
					{showSearch && (
						<div className='results-search'>
							<h3>Search</h3>
							{loadSearchInfo()}
						</div>
					)}
					<ul className='results-list'>
						{results.length === 0 ? (
							<li>
								<h3>No Results</h3>
							</li>
						) : (
							results.map((result, index) => {
								return (
									<li key={index}>
										{
											<Result
												result={result}
												setSelected={setSelected}
											/>
										}
									</li>
								);
							})
						)}
					</ul>
				</div>
			);
		} else {
			return (
				<SelectedObject selected={selected} setSelected={setSelected} />
			);
		}
	};

	return <>{loadData()}</>;
};

export default Results;
