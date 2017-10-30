import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

export default class BarsSection extends Component {
  componentWillMount() {
    this.props.fetchBars();
  }

  render() {
    const { bars } = this.props.bars;
    return (
      <div>
        <Bar data={bars} />
      </div>
    )
  }
}

BarsSection.propTypes = {
  bars: PropTypes.object
}
