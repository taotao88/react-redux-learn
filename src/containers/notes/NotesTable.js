import { connect } from 'react-redux';
import NotesTable from '../../components/notes/NotesTable';
import fetchNotes from '../../actions';

const mapStateToProps = notes => ({ 
  notes
})

export default connect(mapStateToProps, {
  fetchNotes,
})(NotesTable);
