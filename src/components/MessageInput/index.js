import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MessageInput = ({ message, moodInputsHandler }) => {
	return (
		<div className="bubble-container">
			<label className="form__legend" htmlFor="message">
				Mensaje <span>(opcional)</span>
			</label>
			<textarea
				className="form__item message"
				name="message"
				id="message"
				cols="30"
				rows="10"
				placeholder="Why is it a good day...?"
				value={message}
				onChange={moodInputsHandler}
			/>
		</div>
	);
};

MessageInput.propTypes = {
	message: PropTypes.string.isRequired,
	moodInputsHandler: PropTypes.func.isRequired
};

export default MessageInput;
