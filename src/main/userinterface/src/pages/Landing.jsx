import React, { useState } from 'react';
import Login from '../components/Login';
import NavbarLanding from '../components/NavbarLanding';
import Registration from '../components/Registration';
import Icon from '../images/icon.svg';
import '../style/landing.scss';

function Landing({ testConnection, login, connected, attemptLogin }) {
	const [page, setPage] = useState('home');

	const GetPage = () => {
		switch (page) {
			case 'home':
				return (
					<div className='landing-home'>
						<img src={Icon} alt='N911' />
						<h2>Save Minutes, Save Lives.</h2>
						<button
							className={'button-main'}
							onClick={() => setPage('register')}
						>
							Join Now
						</button>
					</div>
				);
			case 'about':
				return (
					<div className='landing-about'>
						<div>
							<p>
								<span className='title'>About</span>
								<br />
								<br />
								Provide your information to 9-1-1 Call takers.
								Enter information now, save minutes in an
								emergency.
								<br />
								<br />
								Proof of concept created by Calgary 9-1-1.
								<br />
								Relevant ESWG Contribution: ESCO0703b
								<br />
								NG 9-1-1 Team:
								<br />
								Lisbeth Garcia
								<br />
								Ravichandran Valavandan
								<br />
								Kimberley Sauter
								<br />
								<br />
								Fullstack application developed by Jacob Artuso.
								<br />
								<br />
								Feedback and comments can be sent to
								<br />
								<span
									className='link'
									onClick={(e) => {
										navigator.clipboard.writeText(
											'ravi.valavandan@calgary.ca'
										);
									}}
								>
									ravi.valavandan@calgary.ca <br />
									(click to copy)
								</span>
							</p>

							<img src={Icon} alt='N911' />
						</div>
						<button
							className='button-main'
							onClick={() => setPage('register')}
						>
							Join Now
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
				<div className='not-connected'>
					<p>Connection Failed</p>
					<button onClick={testConnection}>Retry?</button>
				</div>
			)}
		</div>
	);
}

export default Landing;
