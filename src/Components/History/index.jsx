import React, {Component} from 'react';
import http from 'axios';
import Nav from '../Common/Nav';
import Table from './Table';

const endpoint = playerId => {
	return process.env.REACT_APP_API_URL + '/game/' + playerId + '/history';
};

export default class History extends Component {
	constructor() {
		super();

		this.state = {
			history: null,
		};
	}

	componentWillMount() {
		http.get(endpoint(this.props.match.params.player)).then(res => this.setState({
			history: res.data,
		}));
	}

	render() {
		//If no games are passed through, that means they haven't played any games yet
		let table = <h3>Play a game to see your history</h3>;

		if (this.state.history && this.state.history.games.length > 0)
			table = <Table history={this.state.history} />;

		//react router returns a string instead of an int...
		let playerId = parseInt(this.props.match.params.player);

		return (
			<div>
				<Nav playerId={playerId} />

				{table}
			</div>
		);
	}
};