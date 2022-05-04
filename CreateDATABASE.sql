DROP DATABASE IF EXISTS VCPDR;
CREATE DATABASE VCPDR;
USE VCPDR;
CREATE TABLE Users (
	userID INT NOT NULL UNIQUE AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    telephoneNumber VARCHAR(10) NOT NULL UNIQUE,
    personGivenName VARCHAR(255) NOT NULL,
    personSurName VARCHAR(255) NOT NULL,
    lastUpdated DATE NOT NULL,
    
    PRIMARY KEY(UserID)
    
);

CREATE TABLE Persons(
	userID INT NOT NULL UNIQUE ,
    personMaidenName VARCHAR(255),
    personMiddleName VARCHAR(255),
    personBirthDate DATE,
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
    propertyType VARCHAR(255) NOT NULL,
    gasShutOffLocation VARCHAR(255),
    electicityProvider VARCHAR(255),
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
