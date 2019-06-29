import React from 'react';
import CalendarPage from '../../containers/CalendarPage';
import EditionPage from './../../containers/EditionPage';
import { Route, Switch } from 'react-router-dom';

import './styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			moodData: {
				dateValue: '',
				moodValue: ':)',
				messageValue: 'holaaa'
			}
		};

		//Binding all methods
		this.dateHandler = this.dateHandler.bind(this);
		this.moodHandler = this.moodHandler.bind(this);
		this.messageHandler = this.messageHandler.bind(this);
	}

	dateHandler = e => console.log(e);
	moodHandler = e => console.log(e);
	messageHandler = e => console.log(e);

	render() {
		const { dateValue, moodValue, messageValue } = this.state.moodData;
		return (
			<div className="App">
				<Switch>
					<Route exact path="/">
						<CalendarPage />
					</Route>

					<Route path="/edition-page">
						<EditionPage
							dateValue={dateValue}
							dateHandler={this.dateHandler}
							moodValue={moodValue}
							moodHandler={this.moodHandler}
							messageValue={messageValue}
							messageHandler={this.messageHandler}
						/>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
