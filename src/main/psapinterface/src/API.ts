import axios from 'axios';
import { PersonSearchInfo, PropertySearchInfo, UserInfo } from './interfaces';

const URL = 'http://localhost:8080';

export const loginAPI = async (userInfo: UserInfo) => {
	return await axios.post(`${URL}/api/psap/v1/login`, userInfo);
};

export const registerAPI = async (userInfo: UserInfo) => {
	return await axios.post(`${URL}/api/psap/v1/register`, userInfo);
};

export const personSearchAPI = async (personSearchInfo: PersonSearchInfo) => {
	return await axios.post(
		`${URL}/api/psap/v1/person-search`,
		personSearchInfo
	);
};

export const propertySearchAPI = async (propertySearchInfo:PropertySearchInfo) => {
	return await axios.post(
		`${URL}/api/psap/v1/property-search`,
		propertySearchInfo
	);
}
