import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../style/registration.scss';
import { API_BASE_URL } from '../constants';

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				email: '',
				password: '',
				personGivenName: '',
				personSurName: '',
				telephoneNumber: '',
				telephoneType: '',
			},
			passwordCheck: '',
			page: 1,
			error: false,
			errorMessage: '',
			finished: false,
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			info: {
				...prevState.info,
				[name]: value,
			},
		}));
	};

	onSubmitFirst = async () => {
		const {
			info: { email, password },
			passwordCheck,
		} = this.state;
		if (email === '' || password === '' || passwordCheck === '') {
			this.setState({
				error: true,
				errorMessage: 'Unfilled information.',
			});
			return;
		}

		if (!this.emailValid(email)) {
			this.setState({
				error: true,
				errorMessage: 'Invalid email.',
			});
			return;
		}

		if (password !== passwordCheck) {
			this.setState({
				error: true,
				errorMessage: 'Passwords do not match.',
			});
			return;
		}

		if (password.length < 4) {
			this.setState({
				error: true,
				errorMessage: 'Password must be at least 4 digits.',
			});
			return;
		}

		const taken = await axios
			.get(`${API_BASE_URL}/api/user/v1/email-taken/${email}`)
			.then((res) => {
				return res.data;
			});

		if (taken) {
			console.log('here');
			this.setState({
				error: true,
				errorMessage: 'Email already in use.',
			});
			return;
		}

		this.setState((prevState) => ({
			info: {
				...prevState.info,
				email: prevState.info.email.toLowerCase(),
			},
			page: 2,
			error: false,
			errorMessage: '',
		}));
	};

	onSubmitSecond = () => {
		const {
			info: { personGivenName, personSurName },
		} = this.state;
		if (personGivenName === '' || personSurName === '') {
			this.setState({
				error: true,
				errorMessage: 'Unfilled information.',
			});
			return;
		}

		if (!this.nameValid(personGivenName)) {
			this.setState({
				error: true,
				errorMessage: 'Given name invalid.',
			});
			return;
		}

		if (!this.nameValid(personSurName)) {
			this.setState({
				error: true,
				errorMessage: 'Sur name invalid.',
			});
			return;
		}

		this.setState((prevState) => ({
			info: {
				...prevState.info,
				personGivenName:
					prevState.info.personGivenName.charAt(0).toUpperCase() +
					prevState.info.personGivenName.slice(1).toLowerCase(),
				personSurName:
					prevState.info.personSurName.charAt(0).toUpperCase() +
					prevState.info.personSurName.slice(1).toLowerCase(),
			},
			page: 3,
			error: false,
			errorMessage: '',
		}));
	};

	onSubmitThird = () => {
		const {
			info: { telephoneNumber, telephoneType },
		} = this.state;
		if (telephoneNumber === '' || telephoneType === '') {
			this.setState({
				error: true,
				errorMessage: 'Unfilled information.',
			});
			return;
		}

		if (!this.telephoneValid(telephoneNumber)) {
			this.setState({
				error: true,
				errorMessage: 'Telephone number invalid.',
			});
			return;
		}

		this.createUser();
	};

	createUser = () => {
		axios
			.post(`${API_BASE_URL}/api/user/v1/register`, this.state.info)
			.then((res) => {
				console.log(res.data);
				if (res.data === null) {
					this.setState({
						error: true,
						errorMessage: 'Failed to create user.',
					});
				} else {
					this.setState({
						finished: true,
					});
				}
			});
	};

	telephoneValid = (input) => {
		const regex = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		return !!input.match(regex);
	};

	nameValid = (input) => {
		const regex = /^[a-zA-z][a-zA-z'-]+$/;
		return !!input.match(regex);
	};

	emailValid = (input) => {
		const regex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return !!input.match(regex);
	};

	pageNum = () => {
		return (
			<div className='page-number-wrapper'>
				<p className='page-number'>{this.state.page}</p>
			</div>
		);
	};

	InformationEntry = () => {
		switch (this.state.page) {
			case 1:
				return (
					<>
						<label>
							email
							<input
								type='email'
								name='email'
								onChange={this.handleChange}
								value={this.state.info.email}
							/>
						</label>
						<label>
							password
							<input
								type='password'
								name='password'
								onChange={this.handleChange}
								value={this.state.info.password}
							/>
						</label>
						<label>
							Re-enter password
							<input
								type='password'
								name='passwordCheck'
								onChange={(e) =>
									this.setState({
										passwordCheck: e.target.value,
									})
								}
								value={this.state.passwordCheck}
							/>
							{/* MAKE SURE THIS IS EQUAL TO info.password */}
						</label>
						<button onClick={this.onSubmitFirst}>Next!</button>
					</>
				);
			case 2:
				return (
					<>
						<label>
							Given name
							<input
								type='text'
								name='personGivenName'
								onChange={this.handleChange}
								value={this.state.info.personGivenName}
							/>
						</label>
						<label>
							Sur name
							<input
								type='text'
								name='personSurName'
								onChange={this.handleChange}
								value={this.state.info.personSurName}
							/>
						</label>

						<button onClick={this.onSubmitSecond}>Next!</button>
					</>
				);
			case 3:
				return (
					<>
						<label>
							Telephone Number
							<input
								type='tel'
								name='telephoneNumber'
								onChange={this.handleChange}
								value={this.state.info.telephoneNumber}
							/>
						</label>
						<label>
							Telephone type
							<input
								type='text'
								name='telephoneType'
								onChange={this.handleChange}
								value={this.state.info.telephoneType}
							/>
							{/* TODO make dropdown */}
						</label>

						<button onClick={this.onSubmitThird}>Done!</button>
						<Link to='/'>
							<button>Return</button>
						</Link>
					</>
				);
			default:
				this.setState({ page: 1 });
				break;
		}
	};

	render() {
		return (
			<>
				{this.state.finished ? <Navigate to='/' /> : <></>}
				<this.pageNum />
				<div className={'info-entry p' + this.state.page}>
					{this.state.error ? (
						<p>{this.state.errorMessage}</p>
					) : (
						<p></p>
					)}
					<this.InformationEntry />
				</div>
			</>
		);
	}
}

export default Registration;
