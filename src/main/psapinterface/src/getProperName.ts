export const getProperName = (key: string): string => {
	switch (key) {
		case 'personGivenName':
			return 'Given Name';
		case 'personSurName':
			return 'Sur Name';
		case 'personMiddleName':
			return 'Middle Name';
		case 'personBirthDate':
			return 'Date of Birth';
		case 'personSexCode':
			return 'Sex';
		case 'personPrimaryLanguage':
			return 'Primary Language';
		case 'personSecondaryLanguage':
			return 'Second Language';
		case 'wheelchair':
			return 'Wheelchair Required?';
		case 'licenseNumber':
			return 'License Number';
		case 'licenseProvince':
			return 'License Issued By';
		case 'personFullName':
			return 'Full Name';
		case 'telephoneNumber':
			return 'Number';
		case 'telephoneType':
			return 'Type';
		case 'medicalCondition':
			return 'Name';
		case 'additionalInformation':
			return 'Additional Info';
		case 'medicationGenericProductIdentification':
			return 'Generic Name';
		case 'medicationDoseMeasure':
			return 'Dosage';
		case 'healthCareNumber':
			return 'Health Care Number';
		case 'provinceCode':
			return 'Province';
		case 'personBloodTypeCode':
			return 'Blood Type';
		case 'personRhType':
			return 'Blood Rh';
		case 'isPregnant':
			return 'Is Pregnant?';
		case 'vulnerablePersonDescription':
			return 'Vulnerability';
		case 'specialRequests':
			return 'Special Requests';
		case 'a1':
			return 'Province';
		case 'a3':
			return 'City';
		case 'rd':
			return 'Street Name';
		case 'sts':
			return 'Street Suffix';
		case 'hno':
			return 'House Number';
		case 'hns':
			return 'House Number Suffix';
		case 'pod':
			return 'Quadrant';
		case 'pc':
			return 'Postal Code';
		case 'propertyType':
			return 'Type';
		case 'gasShutOffLocation':
			return 'Gas Shut Off Location';
		case 'electricityProvider':
			return 'Electricity Provider';
		case 'gasProvider':
			return 'Gas Provider';
		case 'waterProvider':
			return 'Water Provider';
		case 'commonName':
			return 'Common Name';
		case 'substanceCategory':
			return 'Category';
		case 'substanceContainer':
			return 'Container';
		case 'unHazmatCode':
			return 'UN Hazmat Code';
		case 'location':
			return 'Location';
		case 'quantity':
			return 'Quantity';
		case 'personMaidenName':
			return 'Maiden Name6';
		case 'person':
			return 'Person';
		case 'emergencyContacts':
			return 'Emergency Contacts';
		case 'medicalConditions':
			return 'Medical Conditions';
		case 'telephones':
			return 'Telephones';
		case 'medicalInformation':
			return 'Medical Information';
		case 'vulnerablePersonInformation':
			return 'Vulnerable Person Information';
		case 'prescribedMedications':
			return 'Prescribed Medications';
		case 'property':
			return 'Property';
		case 'hazardousMaterials':
			return 'Hazardous Materials';
		case 'keyholders':
			return 'Keyholders';
		default:
			return key;
	}
};
