import { FETCH_NOTES, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE } from '../../constants';

const INITIAL_STATE = [
]

export default function notes(state=INITIAL_STATE, action) {
  // console.log('--------notes:',JSON.stringify(action.notes));
  switch(action.type) {
    case FETCH_NOTES_SUCCESS:
      return action.notes;
    case FETCH_NOTES_FAILURE:
    case FETCH_NOTES:
    default:
      return state;
  }
}
