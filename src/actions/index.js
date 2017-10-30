// TODO: refactoring, re-structure, move hard codes out.
import axios from 'axios';
import { 
  FETCH_NOTES_SUCCESS, 
  FETCH_DONUTS_SUCCESS, 
  FETCH_BARS_SUCCESS, 
  FETCH_LINES_SUCCESS 
} from '../constants';

export default function fetchNotes() {
  const API_URL = 'http://127.0.0.1:8000/api/v1/notes';
  return dispatch => {
    axios.get(API_URL)
    .then( response => {
      dispatch({
        type: FETCH_NOTES_SUCCESS,
        notes: response.data
      });
    })
    .catch( response => {
      console.log('Fetch notes failure.');    
    });
  };
} 


export function fetchDonuts() {
  const API_URL = 'http://127.0.0.1:8000/api/v1/charts/donuts';
  return dispatch => {
    axios.get(API_URL)
    .then( response => {
      dispatch({
        type: FETCH_DONUTS_SUCCESS,
        donuts: response.data
      });
    })
    .catch( response => {
      console.log('Fetch donuts failure.', response);    
    });
  };
}

export function fetchBars() {
  const API_URL = 'http://127.0.0.1:8000/api/v2/charts/bars';
  return dispatch => {
    axios.get(API_URL)
    .then( response => {
      dispatch({
        type: FETCH_BARS_SUCCESS,
        bars: response.data
      });
    })
    .catch( response => {
      console.log('Fetch bars failure.', response);    
    });
  };
}

export function fetchLines() {
  const API_URL = 'http://127.0.0.1:8000/api/v1/charts/lines';
  return dispatch => {
    axios.get(API_URL)
    .then( response => {
      dispatch({
        type: FETCH_LINES_SUCCESS,
        lines: response.data
      });
    })
    .catch( response => {
      console.log('Fetch lines failure.', response);    
    });
  };
}
