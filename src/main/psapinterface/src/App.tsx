import React, { useState } from 'react';
import './styles/app.scss';
import Search from './components/search/Search';
import Results from './components/Results';
import Bar from './components/Bar';
import { Permissions } from './components/Types';


const App = () => {
	const [displaySearch, setDisplaySearch] = useState<boolean>(false);

	const [perms, setPerms] = useState<Permissions>({
		fire: false,
		police: false,
		ems: false,
	});

	const [searchInfo, setSearchInfo] = useState<string>('hi');

	return (
		<div className='app'>
			<Bar
				displaySearch={displaySearch}
				toggleSearch={() => {
					setDisplaySearch((prev) => !prev);
				}}
			/>
			{displaySearch && <Search temp='hello' />}
			<Results />
		</div>
	);
};

export default App;
