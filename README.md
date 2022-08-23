<p align="center">
  <img src="./src/main/userinterface/src/images/icon.svg" alt="Logo image"/>
</p>

# Voluntary Citizen Provided Data Repository

## A fullstack application developed by Jacob Artuso in collaboration with the Calgary Next Generation 9-1-1 team.

    NG 9-1-1 Team:
     - Lisbeth Garcia
     - Ravichandran Valavandan
     - Kimberley Sauter

## Provide your information to 9-1-1 Call takers. Enter information now, save minutes in an emergency.

Citizens enter personal data related to:

-   themselves and immediate family (medical conditions, contact information, etc...),
-   property information (hazardous materials, keyholders)
-   vehicles (make, model)

so that 9-1-1 call takers can quickly find this information in case of an emergency.

# Getting Started

## The system is comprised of the following:

-   Backend
    -   Spring boot & Gradle
    -   API endpoints
    -   MySQL database
    -   Port 8080
-   User interface
    -   React (javascript + SCSS)
    -   Axios
    -   Google Maps Places API
-   PSAP (Call taker) interface
    -   React (typescript + SCSS)
    -   Axios
    -   Two versions using different types of maps
        -   ESRI ARCGIS
            -   [Arcgis JS API][1]
            -   [@arcgis/core][2]
            -   Port 3002
        -   Google Maps
            -   [@react-google-maps/api][3]
            -   [react-google-places-autocomplete][4]
            -   Port 3001

## To Run

    // In ./VCPDR
    $

[1]: https://developers.arcgis.com/javascript/latest/
[2]: https://www.npmjs.com/package/@arcgis/core
[3]: https://www.npmjs.com/package/@react-google-maps/api
[4]: https://www.npmjs.com/package/react-google-places-autocomplete
