import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Select from 'react-select';
import { API_BASE_URL } from '../constants';

const telephoneOptions = [
	{
		value: 'Residential Landline',
		label: 'Residential Landline',
	},
	{
		value: 'Business Landline',
		label: 'Business Landline',
	},
	{
		value: 'Mobile',
		label: 'Mobile',
	},
];

const selectStyle = {
	container: (provided) => ({
		...provided,

		width: '100%',
		marginTop: '0.5rem',
		fontWeight: 'normal',
	}),
	control: (provided, state) => ({
		...provided,
		border: 'solid 3px #4f76e8',
		borderRadius: 'none',
		boxShadow: 'none',
		height: '70px',
		'&:hover': {
			borderColor: '#4f76e8',
		},
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: 'none',
	}),
	option: (provided, state) => ({
		...provided,
		borderRadius: 'none',
		backgroundColor: state.isSelected ? '#4f76e8' : 'white',
		textAlign: 'left',
		'&:hover': {
			backgroundColor: '#e1e1e1',
		},
	}),
	valueContainer: (provided, state) => ({
		...provided,
		overflow: 'hidden',
		padding: 'none',
		justifyContent: 'left',
		color: 'black',
	}),
	singleValue: (provided) => ({
		...provided,
		color: 'black',
		paddingLeft: '15px',
	}),
	placeholder: (provided) => ({
		...provided,
		paddingLeft: '15px',
	}),
	input: (provided) => ({
		...provided,
		color: 'black',
		paddingLeft: '15px',
	}),
};

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
			console.log('here123');
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
			console.log('in');
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
		console.log(this.state);

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

	onSubmitThird = (e) => {
		e.preventDefault();
		if (this.state.page !== 3) {
			return;
		}
		const {
			info: { telephoneNumber, telephoneType },
		} = this.state;
		if (telephoneNumber === '' || telephoneType === '') {
			console.log('caught');
			this.setState({
				error: true,
				errorMessage: 'Unfilled information.',
			});
			return;
		}

		if (!this.telephoneValid(telephoneNumber)) {
			console.log('hello here somehow?');
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
				console.log(this.state.info);
				console.log(res.data);
				if (res.data === null) {
					this.setState({
						error: true,
						errorMessage: 'Failed to create user.',
					});
				} else {
					this.props.setPage('login');
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
						<label className='label-main'>
							Email
							<input
								type='email'
								className='input-main'
								name='email'
								onChange={this.handleChange}
								value={this.state.info.email}
							/>
						</label>
						<label className='label-main'>
							Password
							<input
								type='password'
								className='input-main'
								name='password'
								onChange={this.handleChange}
								value={this.state.info.password}
							/>
						</label>
						<label className='label-main'>
							Re-enter Password
							<input
								type='password'
								className='input-main'
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
						<button
							className='button-main'
							onClick={this.onSubmitFirst}
						>
							Next!
						</button>
					</>
				);
			case 2:
				return (
					<>
						<label className='label-main'>
							Given Name
							<input
								type='text'
								className='input-main'
								name='personGivenName'
								onChange={this.handleChange}
								value={this.state.info.personGivenName}
							/>
						</label>
						<label className='label-main'>
							Surname
							<input
								type='text'
								className='input-main'
								name='personSurName'
								onChange={this.handleChange}
								value={this.state.info.personSurName}
							/>
						</label>

						<button
							className='button-main'
							onClick={this.onSubmitSecond}
						>
							Next!
						</button>
					</>
				);
			case 3:
				return (
					<>
						<label className='label-main'>
							Telephone Number
							<input
								type='tel'
								className='input-main'
								name='telephoneNumber'
								onChange={this.handleChange}
								value={this.state.info.telephoneNumber}
							/>
						</label>
						<label className='label-main'>
							Telephone Type
							{/* <input
								type='text'
								className='input-main'
								name='telephoneType'
								onChange={this.handleChange}
								value={this.state.info.telephoneType}
							/> */}
							<Select
								options={telephoneOptions}
								value={telephoneOptions.filter(
									(option) =>
										option.value ===
										this.state.info.telephoneType
								)}
								onChange={(item) =>
									this.setState((prevState) => ({
										info: {
											...prevState.info,
											telephoneType: item.value,
										},
									}))
								}
								styles={selectStyle}
								isSearchable={false}
							/>
							{/* TODO make dropdown */}
						</label>

						<input
							className='button-main'
							type='submit'
							value='Join!'
						/>
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
				<form className='form-main' onSubmit={this.onSubmitThird}>
					<h1>Join</h1>
					<this.pageNum />
					{this.state.error ? (
						<p className='error'>{this.state.errorMessage}</p>
					) : (
						<p className='error'>{'???'}</p>
					)}
					<this.InformationEntry />
					<p>
						Already have an account?{' '}
						<span onClick={() => this.props.setPage('login')}>
							Login!
						</span>
					</p>
				</form>
			</>
		);
	}
}

export default Registration;
