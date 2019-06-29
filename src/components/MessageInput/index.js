import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MessageInput = ({ messageValue, messageHandler }) => {
	return (
		<textarea
			name="message"
			id="message"
			cols="30"
			rows="10"
			placeholder="Why is it a good day...?"
			value={messageValue}
			onChange={messageHandler}
		/>
	);
};

MessageInput.propTypes = {
	messageValue: PropTypes.string.isRequired,
	messageHandler: PropTypes.func.isRequired
};

export default MessageInput;
