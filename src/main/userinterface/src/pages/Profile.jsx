import React, { Component } from 'react';
import '../style/profile.scss';
import Navbar from '../components/Navbar';
import axios from 'axios';
import PersonList from '../components/person/PersonList';
import PropertyList from '../components/PropertyList';
import VehicleList from '../components/VehicleList';
import { API_BASE_URL } from '../constants';
import PersonEditor from '../components/person/PersonEditor';
import PersonForm from '../components/person/PersonForm';
import AdditionalPersonInfo from '../components/person/AdditionalPersonInfo';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPerson: null,
			selectedProperty: null,
			selectedVehicle: null,
			tab: 'persons',
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
						properies: res[1].data,
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
		console.log(type);
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

	tabSwitch = () => {
		switch (this.state.tab) {
			case 'persons': {
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
						<>
							<PersonEditor
								selectedPerson={this.state.selectedPerson}
								onSelect={this.onSelect}
							/>
							<AdditionalPersonInfo
								personId={this.state.selectedPerson.personId}
							/>
						</>
					);
				}
			}

			case 'properties':
				return (
					<PropertyList
						properties={this.state.properties}
						onSelect={this.onSelect}
					/>
				);
			case 'vehicles':
				return (
					<VehicleList
						vehicles={this.state.vehicles}
						onSelect={this.onSelect}
					/>
				);
			default:
				this.setState({
					tab: 'persons',
				});
		}
	};

	render() {
		return (
			<div className='profile'>
				<Navbar handleTabChange={this.handleTabChange} />
				<button onClick={this.props.logout}>Logout</button>
				{this.tabSwitch()}
			</div>
		);
	}
}

export default Profile;
