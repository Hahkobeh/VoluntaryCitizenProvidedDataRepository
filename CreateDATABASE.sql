DROP DATABASE IF EXISTS VCPDR;
CREATE DATABASE VCPDR;
USE VCPDR;
CREATE TABLE Users (
	userID INT NOT NULL UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    personGivenName VARCHAR(255) NOT NULL,
    personSurName VARCHAR(255) NOT NULL,
    lastUpdated DATE NOT NULL,
    
    PRIMARY KEY(userID)
    
);


CREATE TABLE Telephones(
    userID INT NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    telephoneType VARCHAR(20),
    PRIMARY KEY(userID, telephoneNumber),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

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
    lastUpdated DATE NOT NULL,
    PRIMARY KEY(userID),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
	
);

CREATE TABLE EmergencyContacts(
	userID INT NOT NULL,
    personFullName VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    lastUpdated DATE NOT NULL,
    PRIMARY KEY(userID, personFullName),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE Properties(
	userID INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    addressPostalCode varchar(6),
    propertyType VARCHAR(255),
    gasShutOffLocation VARCHAR(255),
    electricityProvider VARCHAR(255),
    gasProvider VARCHAR(255),
    waterProvider VARCHAR(255),
    lastUpdated DATE NOT NULL,
	PRIMARY KEY(userID, address),
    FOREIGN KEY(userID) REFERENCES Users(userID) ON DELETE CASCADE,
    INDEX (address)
);

CREATE TABLE KeyHolders(
	userID INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    personFullName VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    PRIMARY KEY (userID, address, personFullName),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (address) REFERENCES Properties(address) ON DELETE CASCADE
);

CREATE TABLE HazardousMaterials(
	userID INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    commonName VARCHAR(255) NOT NULL,
    substanceCategory VARCHAR(255),
    substanceContainer VARCHAR(255),
    UNHazmatCode INT,
    location VARCHAR(255),
    quantity VARCHAR(255),
    PRIMARY KEY (userID, address, commonName),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE,
    FOREIGN KEY (address) REFERENCES Properties(address) ON DELETE CASCADE
);

CREATE TABLE Vehicles(
    userID INT NOT NULL,
    registrationPlateIdentification VARCHAR(10), /*plate num*/
    provinceCode VARCHAR(2), /*Province identification was issued from*/
    vehicleExteriorColour VARCHAR(20),
    vehicleMake VARCHAR(50),
    vehicleModel VARCHAR(50),
    year int(4),
    PRIMARY KEY (userID, registrationPlateIdentification),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE MedicalInformation(
    userID INT NOT NULL UNIQUE,
    healthCareNumber VARCHAR(20) NOT NULL,
    provinceCode VARCHAR(2),
    personBloodTypeCode VARCHAR(2),
    personRhType BOOL, /*1 is positive, 0 negative*/
    isPregnant BOOL,
    PRIMARY KEY (userID, healthCareNumber),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE

);


CREATE TABLE MedicalConditions(
    userID INT NOT NULL,
    medicalCondition VARCHAR(255) NOT NULL,
    severity VARCHAR(255),
    additionalInformation VARCHAR(500),
    PRIMARY KEY (userID, medicalCondition),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE PrescribedMedications(
    userID INT NOT NULL,
    medicationGenericProductIdentification VARCHAR(255) NOT NULL,
    medicationDoseMeasure VARCHAR(255) NOT NULL,
    PRIMARY KEY (userID, medicationGenericProductIdentification),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE VulnerablePersons (
    userID INT NOT NULL UNIQUE,
    vulnerablePersonDescription VARCHAR(255) NOT NULL,
    specialRequests VARCHAR(500),
    PRIMARY KEY (userID, vulnerablePersonDescription),
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);