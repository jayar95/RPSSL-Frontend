import React, {Component} from 'react';
import Hand from './Hand';
import PropTypes from 'prop-types';

export default class Results extends Component {
	render() {
		return (
			<div className="results row">
				<div className="col-md-6">
					<h3>Computer plays:</h3>

					<div className="computer-hand">
						<Hand name={this.props.result.computer} />
					</div>
				</div>

				<div className="col-md-6 outcome">
					{this.props.result.outcome}
				</div>
			</div>
		);
	}
};

Results.propTypes = {
	result: PropTypes.object,
};