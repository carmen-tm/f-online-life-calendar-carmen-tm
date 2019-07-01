import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DateInput = ({ date, moodInputsHandler }) => {
	return (
		<div>
			<label className="form__legend" htmlFor="date">
				Date
			</label>
			<input
				className="form__item date"
				type="date"
				id="date"
				name="date"
				value={date}
				onChange={moodInputsHandler}
			/>
		</div>
	);
};

DateInput.propTypes = {
	date: PropTypes.string,
	moodInputsHandler: PropTypes.func.isRequired
};

export default DateInput;
