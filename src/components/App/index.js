import React from 'react';
import CalendarPage from '../../containers/CalendarPage';
import EditionPage from './../../containers/EditionPage';
import moment from 'moment';
import { Route, Switch } from 'react-router-dom';

import './styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newMoodData: {
				date: moment(new Date()).format('YYYY-MM-DD'),
				mood: ':)',
				message: ''
			},
			moodDataArr: JSON.parse(localStorage.getItem('moodDataStored')) || []
		};

		//Binding all methods
		this.moodInputsHandler = this.moodInputsHandler.bind(this);
		this.storeInfoLS = this.storeInfoLS.bind(this);
		this.btnSaveHandler = this.btnSaveHandler.bind(this);
		this.resetMoodData = this.resetMoodData.bind(this);
	}

	storeInfoLS() {
		this.setState(
			prevState => {
				return {
					moodDataArr: prevState.moodDataArr
						.concat(prevState.newMoodData)
						//Sort dates by reformating them with moment
						.sort(
							(a, b) =>
								moment(a.date).format('YYYYMMDD') -
								moment(b.date).format('YYYYMMDD')
						)
				};
			},
			() =>
				localStorage.setItem(
					'moodDataStored',
					JSON.stringify(this.state.moodDataArr)
				)
		);
	}

	moodInputsHandler = e => {
		const { value, name } = e.currentTarget;
		this.setState(prevState => {
			return {
				newMoodData: {
					...prevState.newMoodData,
					[name]: value
				}
			};
		});
	};

	btnSaveHandler = e => {
		this.storeInfoLS();
	};

	resetMoodData() {
		this.setState({
			newMoodData: {
				date: moment(new Date()).format('YYYY-MM-DD'),
				mood: ':)',
				message: ''
			}
		});
	}

	render() {
		const { date, mood, message } = this.state.newMoodData;
		const { moodDataArr } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route exact path="/">
						<CalendarPage
							moodDataArr={moodDataArr}
							btnNewRecordHandler={this.resetMoodData}
						/>
					</Route>

					<Route path="/edition-page">
						<EditionPage
							date={date}
							mood={mood}
							message={message}
							moodInputsHandler={this.moodInputsHandler}
							btnSaveHandler={this.btnSaveHandler}
							btnCancelHandler={this.resetMoodData}
						/>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
