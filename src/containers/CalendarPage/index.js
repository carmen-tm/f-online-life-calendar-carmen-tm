import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import PropTypes from 'prop-types';

import './styles.scss';

const CalendarPage = ({ moodDataArr, btnNewRecordHandler }) => {
	return (
		<div>
			<small>CalendarPage</small>
			<Link to="/edition-page" title="Add a new record!">
				<Btn
					className="btn--newRecord"
					btnText="+"
					btnHandler={btnNewRecordHandler}
				/>
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
	moodDataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
	btnNewRecordHandler: PropTypes.func.isRequired
};

export default CalendarPage;
