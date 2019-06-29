import React from 'react';
import CalendarPage from '../../containers/CalendarPage';
import EditionPage from './../../containers/EditionPage';
import { Route, Switch } from 'react-router-dom';

import './styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newMoodData: {
				dateValue: '',
				moodValue: ':(',
				messageValue: 'holaaa'
			},
			moodDataArr: JSON.parse(localStorage.getItem('moodDataStored')) || []
		};

		//Binding all methods
		this.storeInfoLS = this.storeInfoLS.bind(this);
		this.dateHandler = this.dateHandler.bind(this);
		this.moodHandler = this.moodHandler.bind(this);
		this.messageHandler = this.messageHandler.bind(this);
		this.btnSaveHandler = this.btnSaveHandler.bind(this);
	}

	storeInfoLS() {
		this.setState(
			prevState => {
				return {
					moodDataArr: prevState.moodDataArr.concat(prevState.newMoodData)
				};
			},
			() =>
				localStorage.setItem(
					'moodDataStored',
					JSON.stringify(this.state.moodDataArr)
				)
		);
	}

	//TODO: refactor the 3 following functions in just one
	dateHandler = e => {
		const { value } = e.currentTarget;
		console.log(value);
		this.setState(prevState => {
			return {
				newMoodData: {
					...prevState.newMoodData,
					dateValue: value
				}
			};
		});
	};

	moodHandler = e => {
		const { value } = e.currentTarget;
		console.log(value);
		this.setState(prevState => {
			return {
				newMoodData: {
					...prevState.newMoodData,
					moodValue: value
				}
			};
		});
	};

	messageHandler = e => {
		const { value } = e.currentTarget;
		console.log(value);
		this.setState(prevState => {
			return {
				newMoodData: {
					...prevState.newMoodData,
					messageValue: value
				}
			};
		});
	};

	btnSaveHandler = e => {
		e.preventDefault();
		this.storeInfoLS();
	};

	render() {
		const { dateValue, moodValue, messageValue } = this.state.newMoodData;
		const { moodDataArr } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route exact path="/">
						<CalendarPage moodDataArr={moodDataArr} />
					</Route>

					<Route path="/edition-page">
						<EditionPage
							dateValue={dateValue}
							dateHandler={this.dateHandler}
							moodValue={moodValue}
							moodHandler={this.moodHandler}
							messageValue={messageValue}
							messageHandler={this.messageHandler}
							btnSaveHandler={this.btnSaveHandler}
						/>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
