import React from 'react';
import '../styles/bar.scss';

type Props = {
	displaySearch: boolean;
	toggleSearch(): void;
};

const Bar = ({ toggleSearch, displaySearch }: Props) => {
	


	return (
		<div className='bar'>
			<div
				className={'toggle' + (displaySearch ? ' enabled' : '')}
				onClick={toggleSearch}
			>
				<h2>Search</h2>
			</div>
			<div className='tabs'>hello</div>
		</div>
	);
};

export default Bar;
