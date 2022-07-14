import React, { Component } from 'react';
import '../style/profile.scss';
import '../style/person.scss';
import Navbar from '../components/NavbarProfile';
import axios from 'axios';
import PersonList from '../components/person/PersonList';
import PropertyList from '../components/property/PropertyList';
import VehicleList from '../components/vehicle/VehicleList';
import { API_BASE_URL } from '../constants';
import PersonForm from '../components/person/PersonForm';
import PersonMenu from '../components/person/PersonMenu';
import Account from '../components/Account';
import PropertyMenu from '../components/property/PropertyMenu';
import PropertyForm from '../components/property/PropertyForm';
import VehicleForm from '../components/vehicle/VehiclesForm';
import VehicleMenu from '../components/vehicle/VehicleMenu';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPerson: null,
			selectedProperty: null,
			selectedVehicle: null,
			tab: 'person',
			persons: [],
			properties: [],
			vehicles: [],
		};
	}

	componentDidMount() {
		const { userId } = this.props.user;
		const personRequest = `${API_BASE_URL}/api/user/v1/person/${userId}`;
		const propertyRequest = `${API_BASE_URL}/api/user/v1/property/${userId}`;
		const vehicleRequest = `${API_BASE_URL}/api/user/v1/vehicle/${userId}`;

		axios
			.all([
				axios.get(personRequest),
				axios.get(propertyRequest),
				axios.get(vehicleRequest),
			])
			.then(
				axios.spread((...res) => {
					this.setState({
						persons: res[0].data,
						properties: res[1].data,
						vehicles: res[2].data,
					});
				})
			)
			.catch((e) => {
				this.props.testConnection();
			});
	}

	onSelect = (data, type) => {
		switch (type) {
			case 'person':
				this.setState({ selectedPerson: data });
				return;
			case 'property':
				this.setState({ selectedProperty: data });
				return;
			case 'vehicle':
				this.setState({ selectedVehicle: data });
				return;
			default:
				return;
		}
	};

	handleTabChange = (type) => {
		this.setState({
			tab: type,
		});
	};

	reloadPersons = () => {
		const personRequest = `${API_BASE_URL}/api/user/v1/person/${this.props.user.userId}`;
		axios
			.get(personRequest)
			.then((res) => {
				this.setState({
					persons: res.data,
				});
			})
			.catch((e) => {
				this.props.testConnection();
			});
	};

	reloadProperties = () => {
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/property/${this.props.user.userId}`
			)
			.then((res) => {
				this.setState({
					properties: res.data,
				});
			})
			.catch((e) => {
				this.props.testConnection();
			});
	};

	reloadVehicles = () => {
		axios
			.get(
				`${API_BASE_URL}/api/user/v1/vehicle/${this.props.user.userId}`
			)
			.then((res) => {
				this.setState({
					vehicles: res.data,
				});
			})
			.catch((e) => {
				this.props.testConnection();
			});
	};

	tabSwitch = () => {
		switch (this.state.tab) {
			case 'person': {
				// this.state.selectedPerson === {} ?
				if (this.state.selectedPerson === null) {
					return (
						<>
							<PersonList
								persons={this.state.persons}
								reloadPersons={this.reloadPersons}
								onSelect={this.onSelect}
							/>
							<PersonForm
								userId={this.props.user.userId}
								reloadPersons={this.reloadPersons}
							/>
						</>
					);
				} else {
					return (
						<PersonMenu
							selectedPerson={this.state.persons.find(
								(person) =>
									person.personId ===
									this.state.selectedPerson
							)}
							onSelect={this.onSelect}
							reloadPersons={this.reloadPersons}
						/>
					);
				}
			}

			case 'property':
				if (this.state.selectedProperty === null) {
					return (
						<>
							<PropertyList
								properties={this.state.properties}
								reloadProperties={this.reloadProperties}
								onSelect={this.onSelect}
							/>
							<PropertyForm
								userId={this.props.user.userId}
								reloadProperties={this.reloadProperties}
							/>
						</>
					);
				} else {
					return (
						<PropertyMenu
							selectedProperty={this.state.properties.find(
								(property) =>
									property.propertyId ===
									this.state.selectedProperty
							)}
							onSelect={this.onSelect}
							reloadProperties={this.reloadProperties}
							persons={this.state.persons}
						/>
					);
				}
			case 'vehicle':
				if (this.state.selectedVehicle === null) {
					return (
						<>
							<VehicleList
								vehicles={this.state.vehicles}
								onSelect={this.onSelect}
								reloadVehicles={this.reloadVehicles}
							/>
							<VehicleForm
								userId={this.props.user.userId}
								reloadVehicles={this.reloadVehicles}
							/>
						</>
					);
				} else {
					return (
						<VehicleMenu
							selectedVehicle={this.state.selectedVehicle}
							onSelect={this.onSelect}
							reloadVehicles={this.reloadVehicles}
						/>
					);
				}
			case 'account':
				return <Account />;
			default:
				this.setState({
					tab: 'person',
				});
		}
	};

	render() {
		return (
			<div className='profile'>
				<Navbar
					tab={this.state.tab}
					handleTabChange={this.handleTabChange}
					logout={this.props.logout}
				/>
				<div className='profile-container'>{this.tabSwitch()}</div>
			</div>
		);
	}
}

export default Profile;
