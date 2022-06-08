import { AxiosResponse } from "axios";

export interface UserInfo {
	username: string;
	password: string;
	fire?: boolean;
	police?: boolean;
	medical?: boolean;
}

export interface SearchInfo {
	type: string;
	userInfo: UserInfo;
}

export interface PersonSearchInfo extends SearchInfo {
	personName?: string;
	personBirthDate?: string;
	personSexCode?: string;
	
}

export interface PropertySearchInfo extends SearchInfo {
	address: string;
}

export interface Person {
	userId: number;
	personId: number;
	personRelationship: string;
	personGivenName: string;
	personSurName: string;
	personMaidenName?: string;
	personMiddleName?: string;
	personBirthdate?: string;
	personSexCode?: string;
	personPrimaryLanguage?: string;
	personSecondaryLanguage?: string;
	wheelchair?: boolean;
	licenseNumber?: string;
	licenseProvince?: string;
}

export interface Property {
	userId: number;
}

export interface Tab {
	tabTitle: string;
	searchInfo: SearchInfo;
	result: Person[] | Property[];
}
