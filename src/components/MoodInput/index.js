import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MoodInput = ({ inputId, textLabel, moodValue, moodHandler }) => {
	return (
		<div>
			<label className="mood" htmlFor="mood">
				{/* {textLabel} */}
			</label>
			<input
				type="radio"
				name="mood"
				value={textLabel}
				id={inputId}
				checked={moodValue.includes(textLabel)}
				onChange={moodHandler}
			/>
		</div>
	);
};

MoodInput.propTypes = {
	inputId: PropTypes.string.isRequired,
	textLabel: PropTypes.string.isRequired,
	moodValue: PropTypes.string.isRequired,
	moodHandler: PropTypes.func.isRequired
};

export default MoodInput;
