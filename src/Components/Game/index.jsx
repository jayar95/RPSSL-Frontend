import React, {Component} from 'react';
import Nav from '../Common/Nav';
import http from 'axios';
import Hand from './Hand';
import Results from './Results';
import './game.css';

const apiBase = process.env.REACT_APP_API_URL + '/game/';

let handOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const endpoint = playerId => apiBase + playerId + '/play';

export default class Play extends Component {
	constructor() {
		super();

		this.state = {
			roundResult: null,
		};
	}

	playGame = hand => {
		http.post(endpoint(this.props.match.params.player), {
				hand: hand,
			}).then(res => this.setState({
				roundResult: res.data,
			})
		);
	};

	render() {
		let hands = handOptions.map((hand, index) => {
			return <Hand key={index} name={hand} action={this.playGame} />;
		});

		let results;
		if (this.state.roundResult)
			results = <Results result={this.state.roundResult} />;

		let playerId = parseInt(this.props.match.params.player);

		return (
			<div className="game-room">
				<Nav playerId={playerId} />

				<div className="game">
					<h3>Pick a hand:</h3>

					<div className="hands">
						{hands}
					</div>
				</div>

				{results}
			</div>
		);
	}
}