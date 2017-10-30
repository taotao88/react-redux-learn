import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

export default class DonutsSection extends Component {
  componentWillMount() {
    this.props.fetchDonuts();
  }

  render() {
    const { donuts } = this.props.donuts
    return (
      <div>
        <Doughnut data={donuts} />
      </div>
    )
  }
}

DonutsSection.propTypes = {
  donuts: PropTypes.object
}

