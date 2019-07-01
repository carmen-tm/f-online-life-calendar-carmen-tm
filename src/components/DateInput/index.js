import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DateInput = ({ dateValue, dateHandler }) => {
	return (
		<div>
			<label className="form__legend" htmlFor="date">
				Date
			</label>
			<input
				className="form__item date"
				type="date"
				id="date"
				value={dateValue}
				onChange={dateHandler}
			/>
		</div>
	);
};

DateInput.propTypes = {
	dateValue: PropTypes.string,
	dateHandler: PropTypes.func.isRequired
};

export default DateInput;
