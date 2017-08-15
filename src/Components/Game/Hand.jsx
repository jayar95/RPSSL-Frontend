import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

export default class Hand extends Component {
	handleClick = () => this.props.action(this.props.name);

	render() {
		let imageURL = hand => '/images/' + hand + '.png';

		let name = this.props.name;

		return (
			<span className="hand" onClick={this.handleClick} data-tip={name}>
				<ReactTooltip place="top" type="dark" effect="float"/>
				<img src={imageURL(name)} />
			</span>
		);
	}
}

Hand.propTypes = {
	name: PropTypes.string,
	action: PropTypes.func,
};