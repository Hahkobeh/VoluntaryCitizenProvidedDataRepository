import { useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-google-places-autocomplete';
import Select from 'react-select';
import {
	API_BASE_URL,
	citiesList,
	provincesList,
	quandrants,
	streetSuffixes,
} from '../../constants';

const selectStyle = {
	container: (provided) => ({
		...provided,
		fontSize: '1.3rem',
		width: '100%',
		marginTop: '0.5rem',
		fontWeight: 'normal',
	}),
	control: (provided, state) => ({
		...provided,
		border: 'solid 3px #4f76e8',
		borderRadius: 'none',
		boxShadow: 'none',
		fontSize: '1.3rem',
		height: '40px',
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
		paddingLeft: '5px',
	}),
	placeholder: (provided) => ({
		...provided,
		paddingLeft: '5px',
	}),
	input: (provided) => ({
		...provided,
		color: 'black',
		paddingLeft: '5px',
	}),
};

const provinceOptions = provincesList.map((province) => ({
	value: province.code,
	label: province.name,
}));

const quadrantOptions = quandrants.map((quad) => ({
	value: quad,
	label: quad,
}));

const libraries = ['places', 'geometry'];

const suffixOptions = [
	...streetSuffixes.map((suffix) => ({
		value: suffix.at(0) + suffix.slice(1).toLowerCase(),
		label: suffix.at(0) + suffix.slice(1).toLowerCase(),
	})),
	{ value: 'St', label: 'Street' },
];

const PropertyForm = ({ userId, reloadProperties }) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyDcNZ1f3Z5Y76GbG9-j4kZeROO5Zn9hmjc',
		libraries,
	});
	const [data, setData] = useState({
		userId: userId,
		a1: null,
		a3: null,
		rd: '',
		sts: null,
		hno: '',
		hns: '',
		pod: null,
		pc: '',
		lat: 0,
		lng: 0,
	});

	const [cityOptions, setCityOptions] = useState([]);

	useEffect(() => {
		if (data.a1 === null) {
			setCityOptions([
				...[]
					.concat(...citiesList.map((prov) => prov.cities))
					.map((city) => ({ value: city, label: city })),
			]);
		} else {
			setCityOptions([
				...citiesList
					.find((pro) => pro.province === data.a1)
					.cities.map((city) => ({ value: city, label: city })),
				{ value: 'Other', label: 'Other' },
			]);
		}
	}, [data.a1]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			data.a1 !== null &&
			data.a3 !== null &&
			data.rd !== '' &&
			data.sts !== null &&
			data.hno !== ''
		) {
			console.log(
				data.hno +
					' ' +
					data.rd +
					' ' +
					data.sts +
					', ' +
					data.a3 +
					', ' +
					data.a1
			);
			if (isLoaded) {
				geocodeByAddress(
					data.hno +
						' ' +
						data.rd +
						' ' +
						data.sts +
						', ' +
						data.a3 +
						', ' +
						data.a1
				).then((res) => {
					let pc = '';
					if (
						res[0].address_components.at(6).types.at(0) ===
						'postal_code'
					) {
						pc = res[0].address_components.at(6).long_name;
					}
					getLatLng(res[0]).then(({ lat, lng }, res) => {
						axios
							.post(
								`${API_BASE_URL}/api/user/v1/property/create`,
								{
									...data,
									lat: lat,
									lng: lng,
									pc: pc ? pc.replace(/\s/g, '') : '',
								}
							)
							.then((r) => {
								if (r !== null) {
									setData({
										userId: userId,
										a1: null,
										a3: null,
										rd: '',
										sts: null,
										hno: '',
										hns: '',
										pod: null,
										lat: 0,
										lng: 0,
										pc: '',
									});

									reloadProperties();
								}
							});
					});
				});
			}
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='form-main profile-form smaller'
		>
			<h1>Add Property</h1>
			<label className='label-main'>
				House Number
				<input
					type='text'
					className='input-main input'
					name='hno'
					onChange={handleChange}
					value={data.hno}
				/>
			</label>
			{/*<label className='label-main'>
				Unit Number (if applicable)
				<input
					type='text'
					className='input-main input'
					name='hns'
					onChange={handleChange}
					value={data.hns}
				/>
			</label>*/}
			<label className='label-main'>
				Road
				<input
					type='text'
					className='input-main input'
					name='rd'
					onChange={handleChange}
					value={data.rd}
				/>
			</label>
			<label className='label-main'>
				Street Suffix
				<Select
					options={suffixOptions}
					value={suffixOptions.filter(
						(option) => option.label === data.sts
					)}
					onChange={(item) => setData({ ...data, sts: item.value })}
					styles={selectStyle}
				/>
				<label className='label-main'>
					Quadrant
					<Select
						options={quadrantOptions}
						value={quadrantOptions.filter(
							(option) => option.value === data.pod
						)}
						onChange={(item) =>
							setData({ ...data, pod: item.value })
						}
						styles={selectStyle}
					/>
				</label>
			</label>
			<label className='label-main'>
				Province
				<Select
					options={provinceOptions}
					isClearable={true}
					value={provinceOptions.filter(
						(option) => option.value === data.a1
					)}
					onChange={(item) =>
						setData({
							...data,
							a1: item ? item.value : null,
							a3: null,
						})
					}
					styles={selectStyle}
				/>
			</label>
			<label className='label-main'>
				City
				<Select
					options={cityOptions}
					value={cityOptions.filter(
						(option) => option.value === data.a3
					)}
					onChange={(item) => setData({ ...data, a3: item.value })}
					styles={selectStyle}
				/>
			</label>

			<button type='submit' className='button-main'>
				Add!
			</button>
		</form>
	);
};

export default PropertyForm;
