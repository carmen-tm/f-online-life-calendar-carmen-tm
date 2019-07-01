import React from 'react';
import PropTypes from 'prop-types';
import getSmileFace from '../../services/getSmileFace';

import './styles.scss';

const MoodInput = ({ inputId, textLabel, moodValue, moodHandler }) => {
	return (
		<div className="mood-input">
			<label className="mood-input__label" htmlFor="mood">
				<img
					className="mood-input__image"
					src={getSmileFace(textLabel)}
					alt={textLabel}
				/>
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
