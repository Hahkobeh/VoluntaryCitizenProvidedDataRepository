<p align="center">
  <img src="./src/main/userinterface/src/images/icon.svg" alt="Logo image"/>
</p>

# Voluntary Citizen Provided Data Repository

---

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

---

## The system is comprised of the following:

-   Backend
    -   Spring boot & Gradle (Java)
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

### Running Backend

[Java][7]

[Gradle][5]

    In ./

    $ gradle build
    $ gradle bootrun

### Frontend

[Node.js][6]

    In ./src/main/userinterface

    $ npm i
    $ npm run start

    In ./src/main/psapinterface or ./src/main/psapinterfaceesri

    $ npm i
    $ npm run start

# Screenshots

---

## User Interface

![](./screenshots/home.png)

![](./screenshots/About.png)

![](screenshots/Join.png)

![](screenshots/Login.png)

![](screenshots/personscreen.png)

![](screenshots/personinf.png)

![](screenshots/Telephone%20numbers.png)

![](screenshots/property.png)

![](screenshots/hazardousmaterials.png)

![](screenshots/vehicles.png)

## PSAP Interface

![](screenshots/map.png)

![](screenshots/mapselected.png)

![](screenshots/cameras.png)

![](screenshots/search.png)

![](screenshots/Personsearch.png)

![](screenshots/personsearchinfo.png)

![](screenshots/tabs.png)

[1]: https://developers.arcgis.com/javascript/latest/
[2]: https://www.npmjs.com/package/@arcgis/core
[3]: https://www.npmjs.com/package/@react-google-maps/api
[4]: https://www.npmjs.com/package/react-google-places-autocomplete
[5]: https://gradle.org/install/
[6]: https://nodejs.org/en/
[7]: https://www.java.com/en/download/
