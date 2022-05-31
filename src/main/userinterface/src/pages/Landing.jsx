import React, { useState } from 'react';
import '../style/landing.scss';
import Icon from '../images/icon.svg';
import Registration from '../components/Registration';
import Login from '../components/Login';
import NavbarLanding from '../components/NavbarLanding';

function Landing({ testConnection, login, connected }) {
	const [page, setPage] = useState('home');

	const GetPage = () => {
		switch (page) {
			case 'home':
				return (
					<div className='landing-home'>
						<img src={Icon} alt='N911' />
						<h2>Protect those you care for.</h2>
						<button
							className={'button-main'}
							onClick={() => setPage('register')}
						>
							Register Now
						</button>
					</div>
				);
			case 'about':
				return (
					<div className='landing-home'>
						<img src={Icon} alt='N911' />
						<p>
							This is a website where users can voluntarily share
							personal information so that it may be used to help
							them in case of an emergency.
						</p>
						<button
							className='button-main'
							onClick={() => setPage('register')}
						>
							Register Now
						</button>
					</div>
				);

			case 'register':
				return (
					<div className='landing-register'>
						<img src={Icon} alt='N911' />
						<Registration setPage={setPage} />
					</div>
				);
			case 'login':
				return (
					<div className='landing-login'>
						<img src={Icon} alt='N911' />
						<Login
							setPage={setPage}
							login={login}
							testConnection={testConnection}
						/>
					</div>
				);

			default:
				setPage('home');
		}
	};

	return (
		<div className='landing'>
			<NavbarLanding setPage={setPage} page={page} />

			{connected ? (
				<div className='landing-container'>
					<GetPage />
				</div>
			) : (
				<>
					<p>Connection Failed</p>
					<button onClick={testConnection}>Retry?</button>
				</>
			)}
		</div>
	);
}

export default Landing;
