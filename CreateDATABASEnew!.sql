DROP DATABASE IF EXISTS VCPDR;
CREATE DATABASE VCPDR;
USE VCPDR;

/*REQUIRED LOG IN INFORMATION*/

CREATE TABLE User(
	userID INT NOT NULL UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    emailVerified BOOL NOT NULL DEFAULT false,
    password VARCHAR(255) NOT NULL,
    lastLogin DATE NOT NULL,
    PRIMARY KEY(userID)
);


CREATE TABLE Person(
	userID INT NOT NULL,
	personID INT NOT NULL UNIQUE AUTO_INCREMENT,
    personGivenName VARCHAR(255) NOT NULL,
    personSurName VARCHAR(255) NOT NULL,
    personMaidenName VARCHAR(255),
    personMiddleName VARCHAR(255),
    personBirthDate DATE,
    personSexCode VARCHAR(1),
    personPrimaryLanguage VARCHAR(255),
    personSecondaryLanguage VARCHAR(255),
    wheelchair BOOL,
    licenseNumber VARCHAR(255),
    licenseProvince VARCHAR(2),
    PRIMARY KEY(personID),
    FOREIGN KEY(userID) REFERENCES User(userID) ON DELETE CASCADE
);

CREATE TABLE AccountCreator(
   userID INT NOT NULL UNIQUE,
   personID INT NOT NULL UNIQUE,
   PRIMARY KEY (userID),
   FOREIGN KEY (userID) REFERENCES User(userID) ON DELETE CASCADE ,
   FOREIGN KEY (personID) REFERENCES Person(personID) ON DELETE RESTRICT
);


CREATE TABLE PersonRelationship(
    personID1 INT NOT NULL,
    personID2 INT NOT NULL,
    relationshipType VARCHAR(255) NOT NULL, /*"Mother" would specific that personid1's mother is personid2*/
    PRIMARY KEY (personID1, personID2),
    FOREIGN KEY (personID1) REFERENCES Person(personID) ON DELETE CASCADE,
    FOREIGN KEY (personID2) REFERENCES Person(personID) ON DELETE CASCADE
);

CREATE TABLE Telephone(
   personID INT NOT NULL,
   telephoneNumber VARCHAR(10) NOT NULL,
   telephoneType VARCHAR(20) NOT NULL,
   verified BOOLEAN NOT NULL DEFAULT false,
   PRIMARY KEY(personID, telephoneNumber),
   FOREIGN KEY(personID) REFERENCES Person(personID) ON DELETE CASCADE
);


CREATE TABLE EmergencyContact(
	personID INT NOT NULL,
    personFullName VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL,
    PRIMARY KEY(personID, telephoneNumber),
    FOREIGN KEY(personID) REFERENCES Person(personID) ON DELETE CASCADE
);


CREATE TABLE Property(
	userID INT NOT NULL,
    propertyID INT NOT NULL AUTO_INCREMENT UNIQUE,
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
	PRIMARY KEY(propertyID),
    FOREIGN KEY(userID) REFERENCES User(userID) ON DELETE CASCADE
);


CREATE TABLE PropertyRelationship(
    propertyID INT NOT NULL,
    personID INT NOT NULL,
    keyholder BOOLEAN NOT NULL,
    relationshipType VARCHAR(40), /*employee, homeowner, resident*/
    PRIMARY KEY (propertyID, personID),
    FOREIGN KEY (propertyID) REFERENCES Property(propertyID) ON DELETE CASCADE,
    FOREIGN KEY (personID) REFERENCES Person(personID)
);


CREATE TABLE HazardousMaterial(
    propertyID INT NOT NULL,
    hazardousMaterialID INT NOT NULL UNIQUE AUTO_INCREMENT,
    commonName VARCHAR(255) NOT NULL,
    substanceCategory VARCHAR(255),
    substanceContainer VARCHAR(255),
    UNHazmatCode INT,
    location VARCHAR(255),
    quantity VARCHAR(255),
    PRIMARY KEY (hazardousMaterialID),
    FOREIGN KEY (propertyID) REFERENCES Property(propertyID) ON DELETE CASCADE
);


CREATE TABLE Vehicle(
    userID INT NOT NULL,
    registrationPlateIdentification VARCHAR(10) NOT NULL, /*PLATE NUMBER*/
    provinceCode VARCHAR(2), /*PROVINCE PLATE ISSUED FROM*/
    vehicleExteriorColour VARCHAR(20),
    vehicleMake VARCHAR(50),
    vehicleModel VARCHAR(50),
    year int,
    PRIMARY KEY (userID, registrationPlateIdentification),
    FOREIGN KEY (userID) REFERENCES User(userID) ON DELETE CASCADE
);




CREATE TABLE MedicalInformation(
    personID INT NOT NULL UNIQUE,
    healthCareNumber VARCHAR(20),
    provinceCode VARCHAR(2),
    personBloodTypeCode VARCHAR(2),
    personRhType BOOL, /*1 is positive, 0 negative*/
    isPregnant BOOL,
    PRIMARY KEY (personID),
    FOREIGN KEY (personID) REFERENCES Person(personID) ON DELETE CASCADE
);


CREATE TABLE MedicalCondition(
    personID INT NOT NULL,
    medicalCondition VARCHAR(255) NOT NULL,
    severity VARCHAR(255),
    additionalInformation VARCHAR(500),
    PRIMARY KEY (personID, medicalCondition),
    FOREIGN KEY (personID) REFERENCES Person(personID) ON DELETE CASCADE
);


CREATE TABLE PrescribedMedication(
    personID INT NOT NULL,
    medicationGenericProductIdentification VARCHAR(255) NOT NULL,
    medicationDoseMeasure VARCHAR(255) NOT NULL,
    PRIMARY KEY (personID, medicationGenericProductIdentification),
    FOREIGN KEY (personID) REFERENCES Person(personID) ON DELETE CASCADE
);


CREATE TABLE VulnerablePersonInformation(
    personID INT NOT NULL UNIQUE,
    vulnerablePersonDescription VARCHAR(500) NOT NULL,
    specialRequests VARCHAR(500),
    PRIMARY KEY (personID),
    FOREIGN KEY (personID) REFERENCES User(userID) ON DELETE CASCADE
);