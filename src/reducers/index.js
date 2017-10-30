import { combineReducers } from 'redux';
import notes from './notes/NotesReducer';
import donuts from './charts/DonutsReducer';
import bars from './charts/BarsReducer';
import lines from './charts/LinesReducer';

const rootReducer = combineReducers({
  notes,
  donuts,
  bars,
  lines
})

export default rootReducer

