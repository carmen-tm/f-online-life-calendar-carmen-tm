import React from 'react';
import DateInput from './../../components/DateInput';
import MoodInput from '../../components/MoodInput';
import MessageInput from '../../components/MessageInput';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const EditionPage = ({
	dateValue,
	dateHandler,
	moodValue,
	moodHandler,
	messageValue,
	messageHandler,
	btnSaveHandler,
	btnCancelHandler
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

				<Link to="/" title="Save and go to Calendar">
					<Btn
						className="btn--save"
						btnText="SAVE"
						btnHandler={btnSaveHandler}
					/>
				</Link>

				<Link to="/" title="Clear data and go to Calendar">
					<Btn
						className="btn--cancel"
						btnText="CANCEL"
						btnHandler={btnCancelHandler}
					/>
				</Link>
			</form>
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
	btnSaveHandler: PropTypes.func.isRequired,
	btnCancelHandler: PropTypes.func.isRequired
};

export default EditionPage;
