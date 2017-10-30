import { FETCH_LINES, FETCH_LINES_SUCCESS, FETCH_LINES_FAILURE } from '../../constants';

const INITIAL_STATE = {
}

export default function lines(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_LINES_SUCCESS:
      return action.lines;
    case FETCH_LINES_FAILURE:
    case FETCH_LINES:
    default:
      return state;
  }
}
