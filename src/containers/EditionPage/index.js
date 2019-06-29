import React from 'react';
import DateInput from './../../components/DateInput';
import MoodInput from '../../components/MoodInput';
import MessageInput from '../../components/MessageInput';
import Btn from '../../components/Btn';
import { Link } from 'react-router-dom';

import './styles.scss';

const EditionPage = props => {
	return (
		<section>
			<small>Editor</small>
			<form action="post">
				<DateInput />
				<MoodInput />
				<MoodInput />
				<MessageInput />
				<Btn />
				<Btn />
			</form>
			<Link to="/" title="Go to Calendar Page">
				Calendar Page
			</Link>
		</section>
	);
};

export default EditionPage;
