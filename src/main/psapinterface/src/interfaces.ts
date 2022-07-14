import { AxiosResponse } from 'axios';
import React from 'react';

export interface PSAPUser {
	username: string;
	password: string;
	fire: boolean;
	police: boolean;
	medical: boolean;
}

export interface RequestedDataObjects {
	fire: boolean;
	police: boolean;
	medical: boolean;
}

export interface SearchInfo {
	psapUser: PSAPUser;
	requestedDataObjects?: RequestedDataObjects;
}

export interface TelephoneSearchInfo extends SearchInfo {
	telephoneNumber: string;
}

export interface TelephoneInfo {
	first: Telephone;
	second: Person;
}

export interface PersonSearchInfo extends SearchInfo {
	personName: string;
	personBirthDate: string;
	personSexCode: string;
}

export interface PropertySearchInfo extends SearchInfo {
	rd: string;
	sts: string;
	hnos: string;
	a1: string;
	a3: string;
	pod: string;
}

export interface VehicleSearchInfo extends SearchInfo {
	registrationPlateIdentification: string;
	vehicleMake: string;
	vehicleModel: string;
	year: string;
}

export interface Person {
	userId: number;
	personId: number;
	personRelationship: string;
	personGivenName: string;
	personSurName: string;
	personMaidenName?: string;
	personMiddleName?: string;
	personBirthDate?: string;
	personSexCode?: string;
	personPrimaryLanguage?: string;
	personSecondaryLanguage?: string;
	wheelchair?: boolean;
	licenseNumber?: string;
	licenseProvince?: string;
}

export interface PersonInfo {
	person: Object | null;
	emergencyContacts: Object[];
	medicalConditions: Object[];
	telephones: Object[];
	prescribedMedications: Object[];
	vulnerablePersonInformation: Object | null;
}

export interface Telephone {
	personId: number;
	telephoneNumber: string;
	telephoneType: string;
}

export interface Property {
	userId: number;
	propertyId: number;
	a1: string;
	a3: string;
	rd: string;
	sts: string;
	hno: string;
	hns: string;
	pod: string;
	pc: string;
	propertyType: string;
}

export interface PropertyInfo {
	property: Property;
	hazardousMaterials: Object[];
	keyholders: Object[];
}

export interface Vehicle {
	userId: number;
	registrationPlateIdentification: string;
	provinceCode: string;
	vehicleExteriorColour: string;
	vehicleMake: string;
	vehicleModel: string;
	year: number;
}

export interface Tab {
	id: number;
	title: string;
	searchInfo: SearchInfo;
	results: Person[] | Property[] | TelephoneInfo[] | Vehicle[];
	selected: PersonInfo | PropertyInfo | null;
}

export interface SearchObjects {
	personSearch: PersonSearchInfo;
	updatePersonSearch: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	handlePersonSearch: (e: React.FormEvent<HTMLFormElement>) => void;
	telephoneSearch: TelephoneSearchInfo;
	setTelephoneSearch: React.Dispatch<
		React.SetStateAction<TelephoneSearchInfo>
	>;
	handleTelephoneSearch: (e: React.FormEvent<HTMLFormElement>) => void;
	propertySearch: PropertySearchInfo;
	setPropertySearch: React.Dispatch<React.SetStateAction<PropertySearchInfo>>;
	handlePropertySearch: (e: React.FormEvent<HTMLFormElement>) => void;
	vehicleSearch: VehicleSearchInfo;
	setVehicleSearch: React.Dispatch<React.SetStateAction<VehicleSearchInfo>>;
	handleVehicleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface TabsObject {
	tabs: Tab[];
	setTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
	currentTab: number;
	setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
	handleDeleteTab: (index: number, e: React.MouseEvent<HTMLElement>) => void;
}
