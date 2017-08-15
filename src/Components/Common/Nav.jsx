import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav.css';
import http from 'axios';

let apiBase = process.env.REACT_APP_API_URL + '/game/';

const endpoint = playerId => apiBase + playerId;

export default class Nav extends Component {
	constructor() {
		super();

		this.state = {
			player: null,
		};
	}

	componentWillMount() {
		http.get(endpoint(this.props.playerId)).then(res => {
			this.setState({
				player: res.data.player.name,
			});
		});
	}

	render() {
		let player;
		if (this.state.player)
			player = this.state.player;

		const links = {
			play: '/play/' + this.props.playerId,
			history: '/history/' + this.props.playerId,
		};

		return (
			<div className="nav-container">
				<h3>Welcome, {player}</h3>

				<div className="nav">
					Menu:

					<Link className="main-btn" to={links.play}>
						Play
					</Link>

					<Link className="main-btn" to={links.history}>
						History / Statistics
					</Link>
				</div>
			</div>
		);
	}
}

Nav.propTypes = {
	playerId: PropTypes.number,
};