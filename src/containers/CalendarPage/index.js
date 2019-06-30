import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const CalendarPage = ({ moodDataArr }) => {
	return (
		<div>
			<small>CalendarPage</small>
			<Link to="/edition-page" title="Go to the Edition Page">
				+
			</Link>
			<main>
				<ul>
					{moodDataArr.map((moodItem, index) => {
						return (
							<li key={index}>
								<p>{moodItem.moodValue}</p>
								<small>{moodItem.dateValue}</small>
								<p>{moodItem.messageValue}</p>
							</li>
						);
					})}
				</ul>
			</main>
		</div>
	);
};

CalendarPage.propTypes = {
	moodDataArr: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CalendarPage;
