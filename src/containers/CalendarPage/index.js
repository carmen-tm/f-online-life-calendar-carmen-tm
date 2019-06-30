import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import moment from 'moment';
import PropTypes from 'prop-types';
import getSmileFace from '../../services/getSmileFace';

import './styles.scss';

const CalendarPage = ({ moodDataArr, btnNewRecordHandler }) => {
	return (
		<div className="calendar__wrapper">
			<small>CalendarPage</small>
			<Link to="/edition-page" title="Add a new record!">
				<Btn
					className="btn--newRecord"
					btnText="+"
					btnHandler={btnNewRecordHandler}
				/>
			</Link>

			<main>
				<ul className="mood-list">
					{moodDataArr.map((moodItem, index) => {
						return (
							<li key={index} className="mood-item">
								<img
									className="mood-item__image"
									src={getSmileFace(moodItem.moodValue)}
									alt={moodItem.moodValue}
								/>
								<small>
									{moment(moodItem.dateValue).format('MMMM Do YYYY')}
								</small>
								<p className="mood-item__message">{moodItem.messageValue}</p>
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
