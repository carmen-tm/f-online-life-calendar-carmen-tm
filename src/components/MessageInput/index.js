import React from 'react';

import './styles.scss';

const MessageInput = props => {
	return (
		<textarea name="message" id="message" cols="30" rows="10">
			Mensaje
		</textarea>
	);
};

export default MessageInput;
