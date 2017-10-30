import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

export default class LinesSection extends Component {
  componentWillMount() {
    this.props.fetchLines();
  }

  render() {
    const { lines } = this.props.lines;
    return (
      <div>
        <Line data={lines} />
      </div>
    )
  }
}


LinesSection.propTypes = {
  lines: PropTypes.object
}
