import React from 'react';

import './styles.scss';

const MoodInput = props => {
	return (
		<div>
			<label htmlFor="mood">:)</label>
			<input type="checkbox" name="mood" id="moodHappy" />
		</div>
	);
};

export default MoodInput;
