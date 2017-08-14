import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Components/Game';

export default () => (
	<Router>
		<Route path="/" component={Game} />
	</Router>
);