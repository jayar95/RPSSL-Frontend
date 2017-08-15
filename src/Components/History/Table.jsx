import React, {Component} from 'react';
import Stats from './Stats';
import GamesTable from './GamesTable';
import './history.css';

export default class Table extends Component {
	render() {
		let history = this.props.history;

		return (
			<div>
				<Stats stats={history.stats} />

				<GamesTable games={history.games}/>
			</div>
		);
	}
}