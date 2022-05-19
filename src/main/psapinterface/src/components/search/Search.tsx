import React from 'react';

type Props = {
	temp: string;
};

const Search = (props: Props) => {
	return (
		<div>
			<div className='temp'></div>
			{props.temp}
		</div>
	);
};
export default Search;
