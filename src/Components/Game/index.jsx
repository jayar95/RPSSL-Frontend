import React, {Component} from 'react';
import './index.css';
import http from 'axios';
import {Redirect} from 'react-router-dom';

const endpoint = process.env.REACT_APP_API_URL + '/game';

export default class Index extends Component {
	constructor() {
		super();

		this.state = {
			player: '',
			redirect: null,
		}
	}

	handleInputChange = event => {
		this.setState({
			player: event.target.value,
		});
	};

	/**
	 * Make an http request to the API to create a new game. The return data includes the
	 * player ID. That ID is used to redirect the client to the game
	 */
	play = () => {
		http.post(endpoint, {
				player: this.state.player,
			}).then(res => this.setState({
				redirect: '/play/' + res.data.player
			})
		);
	};

	//This is called when the user hits the "enter" key from the text input.
	hitEnter = event => {
		if (event.key === 'Enter') {
			this.play();
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect push to={this.state.redirect}/>;
		}

		return (
			<div className="index">
				<h3>Enter a name to begin a game</h3>

				<input name="player" value={this.state.player} onKeyPress={this.hitEnter}
				       onChange={this.handleInputChange} type="text"
				       placeholder="Your name..." />

				<button onClick={this.play}>Play</button>
			</div>
		);
	}
}