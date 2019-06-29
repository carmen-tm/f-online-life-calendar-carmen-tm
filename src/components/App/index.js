import React from 'react';
import CalendarPage from '../../containers/CalendarPage';
import EditionPage from './../../containers/EditionPage';
import { Route, Switch } from 'react-router-dom';

import './styles.scss';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<CalendarPage />
				</Route>

				<Route path="/edition-page">
					<EditionPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
