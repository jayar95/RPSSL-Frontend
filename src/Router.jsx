import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Game from './Components/Game';

const Router = () => (
	<BrowserRouter>
		<Route path="/" component={Game} />
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