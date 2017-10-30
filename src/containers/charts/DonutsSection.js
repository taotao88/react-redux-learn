import { connect } from 'react-redux';
import DonutsSection from '../../components/charts/DonutsSection';
import { fetchDonuts } from '../../actions';

const mapStateToProps = donuts => ({ 
  donuts
})

export default connect(mapStateToProps, {
  fetchDonuts,
})(DonutsSection);
