import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MessageInput = ({ messageValue, messageHandler }) => {
	return (
		<div>
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
				value={messageValue}
				onChange={messageHandler}
			/>
		</div>
	);
};

MessageInput.propTypes = {
	messageValue: PropTypes.string.isRequired,
	messageHandler: PropTypes.func.isRequired
};

export default MessageInput;
