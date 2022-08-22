import React, { useState } from 'react';

type Props = {
	handleLogin: (
		event: React.FormEvent<HTMLFormElement>,
		username: string,
		password: string
	) => void;
	handlePageChange: (num: number) => void;
};

const Login = ({ handleLogin, handlePageChange }: Props) => {
	const [username, setUsername] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	return (
		<>
			<h1 className='form-header'>Login</h1>
			<form onSubmit={(e) => handleLogin(e, username, password)}>
				<label>
					Username
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<label>
					Password
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<input type='submit' className='button submit' value='Login' />
			</form>
			<button className='button' onClick={() => handlePageChange(1)}>
				Register now!
			</button>
		</>
	);
};

export default Login;
