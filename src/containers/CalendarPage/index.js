import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import PropTypes from 'prop-types';
import MoodRegister from '../../components/MoodRegister';

import './styles.scss';

const CalendarPage = ({ moodDataArr, btnNewRecordHandler }) => {
	return (
		<div className="calendar__wrapper">
			<header>
				<h1 className="page__title">CalendarPage</h1>
				<Link to="/edition-page" title="Add a new record!">
					<Btn
						className="btn--newRecord"
						btnText="+"
						btnHandler={btnNewRecordHandler}
					/>
				</Link>
			</header>

			<main>
				<ul className="mood-list">
					{moodDataArr.map((moodItem, index) => {
						return (
							<li key={index} className="mood-item">
								<MoodRegister moodItem={moodItem} />
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
