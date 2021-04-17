import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img src={spinner} alt='loading...' style={spinnerStyle} />
		</Fragment>
	);
};

const spinnerStyle = {
	display: 'block',
	width: '200px',
	margin: 'auto',
};

export default Spinner;
