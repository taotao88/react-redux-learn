import { connect } from 'react-redux';
import LinesSection from '../../components/charts/LinesSection';
import { fetchLines } from '../../actions';

const mapStateToProps = lines => ({ 
  lines
})

export default connect(mapStateToProps, {
  fetchLines,
})(LinesSection);
