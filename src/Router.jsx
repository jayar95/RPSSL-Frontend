import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Play from './Components/Game/index';
import History from './Components/History/index';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/play/:player" component={Play} />
			<Route path="/history/:player" component={History} />
		</Switch>
	</BrowserRouter>
);

export default () => (
	<div className="container">
		<div className="header">
			<div className="title">Rock Paper Scissors Splock Lizard</div>
		</div>

		<Router />
	</div>
);