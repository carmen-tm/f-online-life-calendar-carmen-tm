import React from 'react';
import PropTypes from 'prop-types';
import getSmileFace from '../../services/getSmileFace';

import './styles.scss';

const MoodInput = ({ inputId, textLabel, mood, moodInputsHandler }) => {
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
				checked={mood.includes(textLabel)}
				onChange={moodInputsHandler}
			/>
		</div>
	);
};

MoodInput.propTypes = {
	inputId: PropTypes.string.isRequired,
	textLabel: PropTypes.string.isRequired,
	mood: PropTypes.string.isRequired,
	moodInputsHandler: PropTypes.func.isRequired
};

export default MoodInput;
