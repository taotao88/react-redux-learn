import React from 'react'; 
import { Responsive, WidthProvider } from 'react-grid-layout';
import Header from './Header';
import DonutsSection from '../containers/charts/DonutsSection';
import BarsSection from '../containers/charts/BarsSection';
import LinesSection from '../containers/charts/LinesSection';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default class ChartsPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { 'layout': {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30,
      onLayoutChange: function() {},   
    }};
  }

  render() {
    return (
      <div className="center">
        <Header />
        <ResponsiveReactGridLayout className="layout" layouts={this.state.layouts}>
          <div key="line" data-grid={{w: 12, h: 6, x: 0, y: 0}}>
            <LinesSection />
          </div>
          <div key="donut" data-grid={{w: 6, h: 3, x: 0, y: 0}}>
            <DonutsSection />        
          </div>
          <div key="bar" data-grid={{w: 6, h: 3, x: 6, y: 0}}>
            <BarsSection />
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

