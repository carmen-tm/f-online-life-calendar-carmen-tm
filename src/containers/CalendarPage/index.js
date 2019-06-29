import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const CalendarPage = props => {
	return (
		<div>
			<small>CalendarPage</small>
			<Link to="/edition-page" title="Go to the Edition Page">
				+
			</Link>
		</div>
	);
};

export default CalendarPage;
