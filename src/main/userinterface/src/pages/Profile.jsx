import React, {Component} from 'react';
import '../style/Profile.scss'
import Navbar from "../components/Navbar";
import axios from "axios";
import PersonList from "../components/PersonList"
import PropertyList from '../components/PropertyList';
import VehicleList from '../components/VehicleList';
import {API_BASE_URL} from "../constants";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:{},
            tab:"persons",
            persons:[],
            properties:[],
            vehicles:[],
            accountCreator:0
        }
    }

    componentDidMount() {
        const {userId} = this.props.user
        const personRequest =`${API_BASE_URL}/api/user/v1/person/${userId}` 
        const propertyRequest =`${API_BASE_URL}/api/user/v1/property/${userId}`
        const vehicleRequest =`${API_BASE_URL}/api/user/v1/vehicle/${userId}`
        const mainPerson = `${API_BASE_URL}/api/user/v1/account-creator/${userId}`
        console.log(personRequest)

        axios.all([axios.get(personRequest), axios.get(propertyRequest), axios.get(vehicleRequest), axios.get(mainPerson)])
            .then(axios.spread((...res) => {
                console.log(res)
                this.setState({
                    persons: res[0].data,
                    properies: res[1].data,
                    vehicles: res[2].data,
                    accountCreator: res[3].data
                })
            }))
            .catch(e => {
                this.props.testConnection()
            })
    }

    handleTabChange = (type) => {
        console.log(type)
        this.setState({
            tab: type
        })
    }

    tabSwitch = () => {
        switch(this.state.tab){
            case "persons":
                return (
                    <PersonList persons={this.state.persons}/>
                )
            case "properties":
                return (
                    <PropertyList properties={this.state.properties}/>
                )
            case "vehicles":
                return (
                    <VehicleList vehicles={this.state.vehicles}/>
                )
            default:
                this.setState({
                    tab:"persons"
                })
        }
    }

    render() {
        return (
            <div className="profile">
                <Navbar handleTabChange={this.handleTabChange}/>
                <button onClick={this.props.logout}>Logout</button>
                {this.tabSwitch()}               
            </div>
        );
    }
}

export default Profile;