import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class GamesTable extends Component {
	render() {
		let gameRounds = this.props.games.map(game => (
			<tr key={game.round}>
				<th>{ game.round }</th>
				<td>{ game.hand }</td>
				<td>{ game.computerHand }</td>
				<td>{ game.outcome }</td>
			</tr>
		));

		return (
			<div>
				<h3 className="table-heading">Full Round History</h3>

				<table className="table table-striped">
					<thead>
					<tr>
						<th>Round #</th>
						<th>Player Hand</th>
						<th>Computer Hand</th>
						<th>Outcome</th>
					</tr>
					</thead>
					<tbody>
						{gameRounds}
					</tbody>
				</table>
			</div>
		);
	}
}

GamesTable.propTypes = {
	games: PropTypes.array,
};