import { FETCH_BARS, FETCH_BARS_SUCCESS, FETCH_BARS_FAILURE } from '../../constants';

const INITIAL_STATE = {
}

export default function bars(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BARS_SUCCESS:
      return action.bars;
    case FETCH_BARS_FAILURE:
    case FETCH_BARS:
    default:
      return state;
  }
}
