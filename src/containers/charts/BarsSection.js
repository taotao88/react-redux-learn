import { connect } from 'react-redux';
import BarsSection from '../../components/charts/BarsSection';
import { fetchBars } from '../../actions';

const mapStateToProps = bars => ({ 
  bars
})

export default connect(mapStateToProps, {
  fetchBars,
})(BarsSection);
