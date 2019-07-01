import React from 'react';
import DateInput from './../../components/DateInput';
import MoodInput from '../../components/MoodInput';
import MessageInput from '../../components/MessageInput';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const EditionPage = ({
	date,
	mood,
	message,
	moodInputsHandler,
	btnSaveHandler,
	btnCancelHandler
}) => {
	return (
		<div className="edition__wrapper">
			<h1 className="page__title">Editor</h1>
			<form className="form" action="post">
				<DateInput date={date} moodInputsHandler={moodInputsHandler} />
				<fieldset className="form__fieldset">
					<legend className="form__legend">Mood</legend>
					<MoodInput
						inputId="moodHappy"
						textLabel=":)"
						mood={mood}
						moodInputsHandler={moodInputsHandler}
					/>
					<MoodInput
						inputId="moodSad"
						textLabel=":("
						mood={mood}
						moodInputsHandler={moodInputsHandler}
					/>
				</fieldset>
				{mood === ':)' ? (
					<MessageInput
						message={message}
						moodInputsHandler={moodInputsHandler}
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
	date: PropTypes.string.isRequired,
	mood: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	moodInputsHandler: PropTypes.func,
	btnSaveHandler: PropTypes.func.isRequired,
	btnCancelHandler: PropTypes.func.isRequired
};

export default EditionPage;
