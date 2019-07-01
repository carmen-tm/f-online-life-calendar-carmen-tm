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
		<div className="edition__wrapper">
			<h1 className="page__title">Editor</h1>
			<form className="form" action="post">
				<DateInput dateValue={dateValue} dateHandler={dateHandler} />
				<fieldset className="form__fieldset">
					<legend className="form__legend">Mood</legend>
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
				</fieldset>
				{moodValue === ':)' ? (
					<MessageInput
						messageValue={messageValue}
						messageHandler={messageHandler}
					/>
				) : null}

				<Link to="/" title="Save and go to Calendar">
					<Btn
						className="btn--save"
						btnText="Save"
						btnHandler={btnSaveHandler}
					/>
				</Link>

				<Link to="/" title="Clear data and go to Calendar">
					<Btn
						className="btn--cancel"
						btnText="Cancel"
						btnHandler={btnCancelHandler}
					/>
				</Link>
			</form>
		</div>
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
