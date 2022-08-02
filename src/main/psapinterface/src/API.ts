import axios from 'axios';
import Proximity from './components/proximity/Proximity';
import { AxiosResponse } from 'axios';

import {
	PersonSearchInfo,
	VehicleSearchInfo,
	RequestedDataObjects,
	PropertySearchInfo,
	PSAPUser,
	TelephoneSearchInfo,
	Property,
	PropertyInfo,
} from './interfaces';

const URL = 'http://localhost:8080';

export const loginAPI = async (userInfo: PSAPUser) => {
	console.log(JSON.stringify(userInfo));
	return await axios.post(`${URL}/api/psap/v1/login`, userInfo);
};

export const registerAPI = async (userInfo: PSAPUser) => {
	return await axios.post(`${URL}/api/psap/v1/register`, userInfo);
};

export const personSearchAPI = async (personSearchInfo: PersonSearchInfo) => {
	return await axios.post(
		`${URL}/api/psap/v1/person-search`,
		personSearchInfo
	);
};

export const propertySearchAPI = async (
	propertySearchInfo: PropertySearchInfo
) => {
	if (propertySearchInfo.address) {
		const address = propertySearchInfo.address.split(/\W+/);
		console.log(address);
		if (address.length < 3 || address.length > 4) return;
		propertySearchInfo = {
			psapUser: propertySearchInfo.psapUser,
			hno: address[0],
			sts: address[2],
			rd: address[1],
			hns: '',
			a1: propertySearchInfo.a1,
			a3: propertySearchInfo.a3,
			pod: address[3] ? address[3] : '',
		};
	}
	console.log(propertySearchInfo);

	return await axios.post(
		`${URL}/api/psap/v1/property-search`,
		propertySearchInfo
	);
};

export const telephoneSearchAPI = async (
	telephoneSearchInfo: TelephoneSearchInfo
) => {
	return await axios.post(
		`${URL}/api/psap/v1/telephone-search`,
		telephoneSearchInfo
	);
};

export const vehicleSearchAPI = async (
	vehicleSearchInfo: VehicleSearchInfo
) => {
	return await axios.post(
		`${URL}/api/psap/v1/vehicle-search`,
		vehicleSearchInfo
	);
};

export const getPersonInfoAPI = async (
	personId: number,
	requestedDataObjects: RequestedDataObjects
) => {
	return await axios.post(
		`${URL}/api/psap/v1/person-info/${personId}`,
		requestedDataObjects
	);
};

export const getPropertyInfoAPI = async (
	propertyId: number,
	requestedDataObjects: RequestedDataObjects
) => {
	return await axios.post(
		`${URL}/api/psap/v1/property-info/${propertyId}`,
		requestedDataObjects
	);
};

export const getPersonNameAPI = async (personId: number) =>
	await axios.get(`${URL}/api/psap/v1/get-main-person-name/${personId}`);

export const getPersonInfoByUserIdAPI = async (
	userId: number,
	requestedDataObjects: RequestedDataObjects
) =>
	await axios.post(
		`${URL}/api/psap/v1/get-person/${userId}`,
		requestedDataObjects
	);

export const ProximityCheckAPI = async (
	lat: number,
	lng: number,
	radius: number
) => await axios.get<PropertyInfo[]>(`${URL}/api/psap/v1/proximity/${lat}/${lng}/${radius}`);
