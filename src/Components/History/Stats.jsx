import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Stats extends Component {
	render() {
		let statRow = ([key, val]) => (
			<div className="stat-block" key={key}>
				<div className="stat-heading">
					{key}
				</div>

				<div className="stat-value">
					{val}
				</div>
			</div>
		);

		let stats =  Object.entries(this.props.stats).map(([label,statObj])=>{
			let renderStats = Object.entries(statObj).map(statRow);

			return (
				<div key={label}>
					<h3>{label}</h3>

					<div className="stat-table">
						{renderStats}
					</div>
				</div>
			);
		});

		return <div>{stats}</div>;
	}
}

Stats.propTypes = {
	stats: PropTypes.object,
};