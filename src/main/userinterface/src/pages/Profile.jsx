import React, {Component} from 'react';

class Profile extends Component {

    email;


    constructor(props) {
        super(props);

        this.email = props.user.email;

        this.state = {
            userID: props.user.userID,
            email: props.user.email,
            personGivenName: props.user.personGivenName,
            personSurName: props.user.personSurName,
            lastUpdated: props.user.lastUpdated,
            personMaidenName: "",
            personMiddleName: "Samuel",
            personBirthDate: "1993-01-02",
            personSexCode: "M",
            personPrimaryLanguage: "english",
            personSecondaryLanguage: "french",
            wheelchair: false,
            telephones: [
                {
                    telephoneNumber: "9998887777",
                    telephoneType: "home"
                },
                {
                    telephoneNumber: "8887776666",
                    telephoneType: "mobile"
                },
                {
                    telephoneNumber: "7776665555",
                    telephoneType: "work"
                }

            ],
            properties: {

            }

        }


    }

    getInfo = async () => {

    }


    render() {


        const names = ["User","Person","Telephones"]
        return (
            <div>
                <p>{names.at(0)} : {names[1]}</p>
                <p>{this.email}</p>


                <button onClick={this.props.logout}>Logout!</button>
                
            </div>
        );
    }
}

export default Profile;