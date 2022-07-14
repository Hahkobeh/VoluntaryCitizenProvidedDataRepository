DROP DATABASE IF EXISTS VCPDR;
CREATE DATABASE VCPDR;
USE VCPDR;
create table psapuser
(
    username varchar(255)         not null
        primary key,
    fire     tinyint(1) default 0 not null,
    police   tinyint(1) default 0 not null,
    medical  tinyint(1) default 0 not null,
    password varchar(255)         not null,
    constraint psaplogin_username_uindex
        unique (username)
);

create table user
(
    userID        int auto_increment
        primary key,
    email         varchar(255)         not null,
    emailVerified tinyint(1) default 0 not null,
    password      varchar(255)         not null,
    lastLogin     date                 not null,
    constraint email
        unique (email),
    constraint userID
        unique (userID)
);

create table person
(
    userID                  int          not null,
    personID                int auto_increment
        primary key,
    personRelationship      varchar(255) not null,
    personGivenName         varchar(255) not null,
    personSurName           varchar(255) not null,
    personMaidenName        varchar(255) null,
    personMiddleName        varchar(255) null,
    personBirthDate         date         null,
    personSexCode           varchar(1)   null,
    personPrimaryLanguage   varchar(255) null,
    personSecondaryLanguage varchar(255) null,
    wheelchair              tinyint(1)   null,
    licenseNumber           varchar(255) null,
    licenseProvince         varchar(2)   null,
    constraint personID
        unique (personID),
    constraint person_ibfk_1
        foreign key (userID) references user (userID)
            on delete cascade
);

create table emergencycontact
(
    personID        int          not null,
    personFullName  varchar(255) not null,
    telephoneNumber varchar(10)  not null,
    primary key (personID, telephoneNumber),
    constraint emergencycontact_ibfk_1
        foreign key (personID) references person (personID)
            on delete cascade
);

create table medicalcondition
(
    personID              int          not null,
    medicalCondition      varchar(255) not null,
    severity              varchar(255) null,
    additionalInformation varchar(500) null,
    primary key (personID, medicalCondition),
    constraint medicalcondition_ibfk_1
        foreign key (personID) references person (personID)
            on delete cascade
);

create table medicalinformation
(
    personID            int         not null
        primary key,
    healthCareNumber    varchar(20) null,
    provinceCode        varchar(2)  null,
    personBloodTypeCode varchar(2)  null,
    personRhType        tinyint(1)  null,
    isPregnant          tinyint(1)  null,
    constraint personID
        unique (personID),
    constraint medicalinformation_ibfk_1
        foreign key (personID) references person (personID)
            on delete cascade
);

create index userID
    on person (userID);

create table prescribedmedication
(
    personID                               int          not null,
    medicationGenericProductIdentification varchar(255) not null,
    medicationDoseMeasure                  varchar(255) not null,
    primary key (personID, medicationGenericProductIdentification),
    constraint prescribedmedication_ibfk_1
        foreign key (personID) references person (personID)
            on delete cascade
);

create table property
(
    userID              int          not null,
    propertyID          int auto_increment
        primary key,
    A1                  varchar(2)   not null,
    A3                  varchar(30)  not null,
    RD                  varchar(30)  not null,
    STS                 varchar(10)  not null,
    HNO                 varchar(10)  not null,
    HNS                 varchar(10)  null,
    POD                 varchar(2)   null,
    PC                  varchar(6)   null,
    propertyType        varchar(255) null,
    gasShutOffLocation  varchar(255) null,
    electricityProvider varchar(255) null,
    gasProvider         varchar(255) null,
    waterProvider       varchar(255) null,
    constraint propertyID
        unique (propertyID),
    constraint property_ibfk_1
        foreign key (userID) references user (userID)
            on delete cascade
);

create table hazardousmaterial
(
    propertyID          int          not null,
    hazardousMaterialID int auto_increment
        primary key,
    commonName          varchar(255) not null,
    substanceCategory   varchar(255) null,
    substanceContainer  varchar(255) null,
    UNHazmatCode        int          null,
    location            varchar(255) null,
    quantity            varchar(255) null,
    constraint hazardousMaterialID
        unique (hazardousMaterialID),
    constraint hazardousmaterial_ibfk_1
        foreign key (propertyID) references property (propertyID)
            on delete cascade
);

create index propertyID
    on hazardousmaterial (propertyID);

create index userID
    on property (userID);

create table propertyrelationship
(
    propertyID int        not null,
    personID   int        not null,
    keyholder  tinyint(1) not null,
    primary key (propertyID, personID),
    constraint propertyrelationship_ibfk_1
        foreign key (propertyID) references property (propertyID)
            on delete cascade,
    constraint propertyrelationship_ibfk_2
        foreign key (personID) references person (personID)
);

create index personID
    on propertyrelationship (personID);

create table telephone
(
    personID        int                  not null,
    telephoneNumber varchar(10)          not null,
    telephoneType   varchar(20)          not null,
    verified        tinyint(1) default 0 not null,
    primary key (personID, telephoneNumber),
    constraint telephone_ibfk_1
        foreign key (personID) references person (personID)
            on delete cascade
);

create table vehicle
(
    userID                          int         not null,
    registrationPlateIdentification varchar(10) not null,
    provinceCode                    varchar(2)  null,
    vehicleExteriorColour           varchar(20) null,
    vehicleMake                     varchar(50) null,
    vehicleModel                    varchar(50) null,
    year                            int         null,
    primary key (userID, registrationPlateIdentification),
    constraint vehicle_ibfk_1
        foreign key (userID) references user (userID)
            on delete cascade
);

create table vulnerablepersoninformation
(
    personID                    int          not null
        primary key,
    vulnerablePersonDescription varchar(500) not null,
    specialRequests             varchar(500) null,
    constraint personID
        unique (personID),
    constraint vulnerablepersoninformation_ibfk_1
        foreign key (personID) references user (userID)
            on delete cascade
);
