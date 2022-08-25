import { tab } from '@testing-library/user-event/dist/tab';
import React, { useEffect, useState } from 'react';
import {
	personSearchAPI,
	propertySearchAPI,
	telephoneSearchAPI,
	vehicleSearchAPI,
} from '../API';
import Navbar from '../components/navbar/Navbar';
import Search from '../components/navbar/Search';
import Proximity from '../components/proximity/Proximity';
import Results from '../components/results/Results';
import {
	PersonSearchInfo,
	Property,
	PropertyInfo,
	PropertySearchInfo,
	ProximitySearchInfo,
	PSAPUser,
	RequestedDataObjects,
	SearchInfo,
	SearchObjects,
	Tab,
	TabsObject,
	TelephoneInfo,
	TelephoneSearchInfo,
	VehicleSearchInfo,
} from '../interfaces';
import '../styles/interface.scss';

type Props = {
	logout: () => void;
	psapUser: PSAPUser;
};

const Interface = ({ logout, psapUser }: Props) => {
	const [proximity, setProximity] = useState(false);

	const [currentTab, setCurrentTab] = useState<number>(-1);

	const [tabNumber, setTabNumber] = useState(1);

	const [requestedDataObjects, setRequestedDataObjects] =
		useState<RequestedDataObjects>({
			fire: psapUser.fire,
			police: psapUser.police,
			medical: psapUser.medical,
		});

	const [personSearch, setPersonSearch] = useState<PersonSearchInfo>({
		psapUser: psapUser,
		personName: '',
		personBirthDate: '',
		personSexCode: '',
	});

	const [telephoneSearch, setTelephoneSearch] = useState<TelephoneSearchInfo>(
		{
			psapUser: psapUser,
			telephoneNumber: '',
		}
	);

	const [propertySearch, setPropertySearch] = useState<PropertySearchInfo>({
		psapUser: psapUser,
		address: '',
		rd: '',
		sts: '',
		hno: '',
		hns: '',
		a1: '',
		a3: '',
		pod: '',
	});

	const [vehicleSearch, setVehicleSearch] = useState<VehicleSearchInfo>({
		psapUser: psapUser,
		registrationPlateIdentification: '',
		vehicleMake: '',
		vehicleModel: '',
		year: '',
	});

	const [tabs, setTabs] = useState<Tab[]>([]);

	const [open, setOpen] = useState('none');

	useEffect(() => {
		if (tabs.length < 1) return;
		setCurrentTab(tabNumber - 1);
	}, [tabNumber]);

	useEffect(() => {}, [tabs.length]);

	const handleOpenClick = (value: string) => {
		if (value === 'proximity') {
			if (proximity === true) {
				setProximity(false);
				setOpen('none');
				return;
			}
			setProximity(true);
			setOpen('none');
			return;
		}
		setProximity(false);

		if (value === open) {
			setOpen('none');
		} else {
			setOpen(value);
		}
	};

	const updatePersonSearch = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setPersonSearch({
			...personSearch,
			[name]: value,
		});
	};

	const handlePersonSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		personSearchAPI({
			...personSearch,
			requestedDataObjects: requestedDataObjects,
		}).then((res) => {
			setTabs([
				...tabs,
				{
					id: getTabNumber(),
					title: 'Person Search ' + getTabNumber(),
					searchInfo: personSearch,
					results: res.data,
					selected: null,
				},
			]);
		});
	};

	const handleTelephoneSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (telephoneSearch.telephoneNumber === '') return;

		telephoneSearchAPI({
			...telephoneSearch,
			requestedDataObjects: requestedDataObjects,
		}).then((res: { data: TelephoneInfo[] }) => {
			setTabs([
				...tabs,
				{
					id: getTabNumber(),
					title: 'Telephone Search ' + getTabNumber(),
					searchInfo: telephoneSearch,
					results: res.data,
					selected: null,
				},
			]);
		});
	};

	const handlePropertySearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		propertySearchAPI({
			...propertySearch,
			requestedDataObjects: requestedDataObjects,
		}).then((res) => {
			setTabs([
				...tabs,
				{
					id: getTabNumber(),
					title: 'Property Search ' + getTabNumber(),
					searchInfo: propertySearch,
					results: res!.data,
					selected: null,
				},
			]);
		});
	};

	const handleVehicleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		vehicleSearchAPI({
			...vehicleSearch,
			requestedDataObjects: requestedDataObjects,
		}).then((res) => {
			console.log(res.data);
			setTabs([
				...tabs,
				{
					id: getTabNumber(),
					title: 'Vehicle Search ' + getTabNumber(),
					searchInfo: vehicleSearch,
					results: res.data,
					selected: null,
				},
			]);
		});
	};

	const handleProximitySearch = (
		properties: Property[],
		lat: number,
		lng: number,
		radius: number,
		selected: PropertyInfo | null | undefined
	) => {
		const proximitySearchInfo: ProximitySearchInfo = {
			psapUser: psapUser,
			lat: lat,
			lng: lng,
			radius: radius,
		};

		handleOpenClick('tabs');

		console.log(properties);
		setTabs([
			...tabs,
			{
				id: getTabNumber(),
				title: 'Proximity Search ' + getTabNumber(),
				searchInfo: proximitySearchInfo,
				results: properties,
				selected: selected ? selected : null,
			},
		]);
	};

	const handleDeleteTab = (
		index: number,
		e: React.MouseEvent<HTMLElement>
	) => {
		e.stopPropagation();
		const tabsTemp = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
		setTabs(tabsTemp);
	};

	const getTabNumber = () => {
		const num = tabNumber;
		setTabNumber(tabNumber + 1);
		return num;
	};

	const searchObjects: SearchObjects = {
		personSearch: personSearch,
		updatePersonSearch: updatePersonSearch,
		handlePersonSearch: handlePersonSearch,
		telephoneSearch: telephoneSearch,
		setTelephoneSearch: setTelephoneSearch,
		handleTelephoneSearch: handleTelephoneSearch,
		propertySearch: propertySearch,
		setPropertySearch: setPropertySearch,
		handlePropertySearch: handlePropertySearch,
		vehicleSearch: vehicleSearch,
		setVehicleSearch: setVehicleSearch,
		handleVehicleSearch: handleVehicleSearch,
	};

	const tabsObject: TabsObject = {
		tabs: tabs,
		setTabs: setTabs,
		currentTab: currentTab,
		setCurrentTab: setCurrentTab,
		handleDeleteTab: handleDeleteTab,
	};

	const editSelected = (data: any) => {
		console.log(data);

		const editedTabs: Tab[] = tabs.map((tab) => {
			if (tab.id === currentTab) {
				return {
					...tab,
					selected: data,
				};
			}
			return tab;
		});
		setTabs(editedTabs);
	};

	if (!proximity) {
		return (
			<div className={open === 'none' ? 'spacer-one' : 'spacer-two'}>
				<Navbar
					logout={logout}
					searchObjects={searchObjects}
					tabsObject={tabsObject}
					open={open}
					handleOpenClick={handleOpenClick}
					requestedDataObjects={requestedDataObjects}
					setRequestedDataObjects={setRequestedDataObjects}
					proximity={proximity}
				/>
				{currentTab !== -1 ? (
					<Results
						tab={tabs.find((tab) => currentTab === tab.id)!}
						editSelected={editSelected}
						requestedDataObjects={requestedDataObjects}
					/>
				) : (
					<h1 className='no-tab'>No tab selected</h1>
				)}
			</div>
		);
	} else {
		return (
			<div className='spacer-one'>
				<Navbar
					logout={logout}
					searchObjects={searchObjects}
					tabsObject={tabsObject}
					open={open}
					handleOpenClick={handleOpenClick}
					requestedDataObjects={requestedDataObjects}
					setRequestedDataObjects={setRequestedDataObjects}
					proximity={proximity}
				/>
				<Proximity handleProximitySearch={handleProximitySearch} />
			</div>
		);
	}
};

export default Interface;
