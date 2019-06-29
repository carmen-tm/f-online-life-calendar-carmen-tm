import React from 'react';

import './styles.scss';

const DateInput = props => {
	return (
		<div>
			<label htmlFor="date">Date</label>
			<input type="date" id="date" />
		</div>
	);
};

export default DateInput;
