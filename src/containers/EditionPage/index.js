import React from 'react';
import DateInput from './../../components/DateInput';
import MoodInput from '../../components/MoodInput';
import MessageInput from '../../components/MessageInput';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';

import './styles.scss';
import PropTypes from 'prop-types';

const EditionPage = ({
	dateValue,
	dateHandler,
	moodValue,
	moodHandler,
	messageValue,
	messageHandler,
	btnSaveHandler
}) => {
	return (
		<section>
			<small>Editor</small>
			<form action="post">
				<DateInput dateValue={dateValue} dateHandler={dateHandler} />
				<MoodInput
					inputId="moodHappy"
					textLabel=":)"
					moodValue={moodValue}
					moodHandler={moodHandler}
				/>
				<MoodInput
					inputId="moodSad"
					textLabel=":("
					moodValue={moodValue}
					moodHandler={moodHandler}
				/>
				<MessageInput
					messageValue={messageValue}
					messageHandler={messageHandler}
				/>
				<Btn className="btn--save" btnText="SAVE" btnHandler={btnSaveHandler} />
				<Btn
					className="btn--cancel"
					btnText="CANCEL"
					btnHandler={e => {
						e.preventDefault();
						console.log(e);
					}}
				/>
			</form>
			<Link to="/" title="Go to Calendar Page">
				Calendar Page
			</Link>
		</section>
	);
};

EditionPage.propTypes = {
	dateValue: PropTypes.string.isRequired,
	dateHandler: PropTypes.func.isRequired,
	moodValue: PropTypes.string.isRequired,
	moodHandler: PropTypes.func.isRequired,
	messageValue: PropTypes.string.isRequired,
	messageHandler: PropTypes.func.isRequired,
	btnSaveHandler: PropTypes.func.isRequired
};

export default EditionPage;
