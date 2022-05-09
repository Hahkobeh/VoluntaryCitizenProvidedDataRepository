DROP DATABASE IF EXISTS VCPDR;
CREATE DATABASE VCPDR;
USE VCPDR;

/*REQUIRED LOG IN INFORMATION*/
CREATE TABLE Users (
	userID INT NOT NULL UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    personGivenName VARCHAR(255) NOT NULL,
    personSurName VARCHAR(255) NOT NULL,
    lastLogin DATE NOT NULL,
    PRIMARY KEY(userID)
);

/*ALLOWS ADDITION OF MULTIPLE PHONES, ONE WILL BE REQUIRED UPON ACCOUNT CREATION*/
CREATE TABLE Telephones(
    userID INT NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    telephoneType VARCHAR(20) NOT NULL,
    PRIMARY KEY(userID, telephoneNumber),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*ADDITIONAL INFORMATION RELATING TO THE USER*/
CREATE TABLE Persons(
	userID INT NOT NULL UNIQUE ,
    personMaidenName VARCHAR(255),
    personMiddleName VARCHAR(255),
    personBirthDate DATE,
    personSexCode VARCHAR(1),
    personPrimaryLanguage VARCHAR(255),
    personSecondaryLanguage VARCHAR(255),
    wheelchair BOOL,
    licenseNumber VARCHAR(255),
    licenseProvince VARCHAR(2),
    PRIMARY KEY(userID),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*EMERGENCY CONTACTS FOR THE USER*/
CREATE TABLE EmergencyContacts(
	userID INT NOT NULL,
    personFullName VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    PRIMARY KEY(userID, telephoneNumber),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*USER PROPERTIES*/
CREATE TABLE Properties(
	userID INT NOT NULL,
    addressID INT NOT NULL AUTO_INCREMENT UNIQUE,
    A1 VARCHAR(2) NOT NULL, /*PROVINCE*/
    A3 VARCHAR(30) NOT NULL, /*CITY*/
    RD VARCHAR(30) NOT NULL, /*ROAD OR STREET NAME*/
    STS VARCHAR(10) NOT NULL, /*STREET SUFFIX: AVE, STREET*/
    HNO VARCHAR(10) NOT NULL, /*HOUSE NUMBER*/
    HNS VARCHAR(10), /*HOUSE NUMBER SUFFIX*/
    POD VARCHAR(2), /*TRAILING STREET SUFFIX */
    PC varchar(6), /*POSTAL CODE*/
    propertyType VARCHAR(255),
    gasShutOffLocation VARCHAR(255),
    electricityProvider VARCHAR(255),
    gasProvider VARCHAR(255),
    waterProvider VARCHAR(255),
	PRIMARY KEY(userID, addressID),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*KEYHOLDERS FOR SPECIFIED PROPERTIES*/
CREATE TABLE KeyHolders(
	userID INT NOT NULL,
    addressID INT NOT NULL,
    personFullName VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    PRIMARY KEY (userID, addressID, personFullName),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (addressID) REFERENCES Properties(addressID) ON DELETE CASCADE
);

/*HAZARDOUS MATERIALS AT SPECIFIED PROPERTY*/
CREATE TABLE HazardousMaterials(
	userID INT NOT NULL,
    addressID INT NOT NULL,
    commonName VARCHAR(255) NOT NULL,
    substanceCategory VARCHAR(255),
    substanceContainer VARCHAR(255),
    UNHazmatCode INT,
    location VARCHAR(255),
    quantity VARCHAR(255),
    PRIMARY KEY (userID, addressID),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (addressID) REFERENCES Properties(addressID) ON DELETE CASCADE
);

/*USER VEHICLES*/
CREATE TABLE Vehicles(
    userID INT NOT NULL,
    registrationPlateIdentification VARCHAR(10) NOT NULL, /*PLATE NUMBER*/
    provinceCode VARCHAR(2), /*PROVINCE PLATE ISSUED FROM*/
    vehicleExteriorColour VARCHAR(20),
    vehicleMake VARCHAR(50),
    vehicleModel VARCHAR(50),
    year int,
    PRIMARY KEY (userID, registrationPlateIdentification),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*USER DEPENDANTS*/
CREATE TABLE Dependents (
    userID INT NOT NULL,
    dependentID INT NOT NULL AUTO_INCREMENT UNIQUE,
    personGivenName VARCHAR(255) NOT NULL,
    personSurName VARCHAR(255) NOT NULL,
    dependentType varchar(10) NOT NULL, /*CHILD / VULNERABLE PERSON*/
    personBirthDate DATE,
    personSexCode VARCHAR(1),
    personPrimaryLanguage VARCHAR(255),
    personSecondaryLanguage VARCHAR(255),
    wheelchair BOOL,
    PRIMARY KEY (userID, dependentID),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

/*MEDICAL INFORMATION FOR USER OR USER'S DEPENDENTS*/
CREATE TABLE MedicalInformation(
    userID INT NOT NULL,
    dependentID INT NOT NULL DEFAULT -1, /*IF -1, INFORMATION IS FOR MAIN USER*/
    healthCareNumber VARCHAR(20),
    provinceCode VARCHAR(2),
    personBloodTypeCode VARCHAR(2),
    personRhType BOOL, /*1 is positive, 0 negative*/
    isPregnant BOOL,
    PRIMARY KEY (userID, dependentID),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (dependentID) REFERENCES Dependents(dependentID) ON DELETE CASCADE
);


/*USER OR DEPENDENTS MEDICAL CONDITIONS*/
CREATE TABLE MedicalConditions(
    userID INT NOT NULL,
    dependentID INT NOT NULL DEFAULT -1, /*IF -1, INFORMATION IS FOR MAIN USER*/
    medicalCondition VARCHAR(255) NOT NULL,
    severity VARCHAR(255),
    additionalInformation VARCHAR(500),
    PRIMARY KEY (userID, medicalCondition),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (dependentID) REFERENCES Dependents(dependentID) ON DELETE CASCADE
);

/*USER OR DEPENDENTS MEDICAL PRESCRIPTIONS*/
CREATE TABLE PrescribedMedications(
    userID INT NOT NULL,
    dependentID INT NOT NULL DEFAULT -1, /*IF -1, INFORMATION IS FOR MAIN USER*/
    medicationGenericProductIdentification VARCHAR(255) NOT NULL,
    medicationDoseMeasure VARCHAR(255) NOT NULL,
    PRIMARY KEY (userID, medicationGenericProductIdentification),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (dependentID) REFERENCES Dependents(dependentID) ON DELETE CASCADE
);


/*USER OR DEPENDENTS VULNERABLE PERSON INFORMATION*/
CREATE TABLE VulnerablePersonInformation(
    userID INT NOT NULL,
    vulnerablePersonID INT NOT NULL AUTO_INCREMENT UNIQUE,
    dependentID INT NOT NULL DEFAULT -1, /*IF -1, INFORMATION IS FOR MAIN USER*/
    vulnerablePersonDescription VARCHAR(500) NOT NULL,
    specialRequests VARCHAR(500),
    PRIMARY KEY (userID, vulnerablePersonID, dependentID),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (dependentID) REFERENCES Dependents(dependentID) ON DELETE CASCADE
);