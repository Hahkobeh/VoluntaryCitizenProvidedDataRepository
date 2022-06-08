import React, { useState } from 'react';
import { UserInfo } from '../interfaces';

type Props = {
	handleRegister: (
		event: React.FormEvent<HTMLFormElement>,
		userInfo: UserInfo
	) => void;
	handlePageChange: (num: number) => void;
};

const Register = ({ handleRegister, handlePageChange }: Props) => {
	const [newUserInfo, setNewUserInfo] = useState<UserInfo>({
		username: '',
		password: '',
		fire: false,
		police: false,
		medical: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
	};

	return (
		<>
			<h1 className='form-header'>Register</h1>
			<form onSubmit={(e) => handleRegister(e, newUserInfo)}>
				<label>
					Username
					<input
						type='text'
						value={newUserInfo.username}
						onChange={(e) =>
							setNewUserInfo({
								...newUserInfo,
								username: e.target.value,
							})
						}
					/>
				</label>
				<label>
					Password
					<input
						type='password'
						value={newUserInfo.password}
						onChange={(e) =>
							setNewUserInfo({
								...newUserInfo,
								password: e.target.value,
							})
						}
					/>
				</label>
				<label>
					Fire
					<input
						type='checkbox'
						checked={newUserInfo.fire}
						onChange={() =>
							setNewUserInfo({
								...newUserInfo,
								fire: !newUserInfo.fire,
							})
						}
					/>
				</label>
				<label>
					Police
					<input
						type='checkbox'
						checked={newUserInfo.police}
						onChange={() =>
							setNewUserInfo({
								...newUserInfo,
								police: !newUserInfo.police,
							})
						}
					/>
				</label>
				<label>
					Medical
					<input
						type='checkbox'
						checked={newUserInfo.medical}
						onChange={() =>
							setNewUserInfo({
								...newUserInfo,
								medical: !newUserInfo.medical,
							})
						}
					/>
				</label>
				<input
					type='submit'
					className='button submit'
					value='Register'
				/>
			</form>
			<button className='button' onClick={() => handlePageChange(0)}>
				Login
			</button>
		</>
	);
};

export default Register;
