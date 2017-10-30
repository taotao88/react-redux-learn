import { FETCH_DONUTS, FETCH_DONUTS_SUCCESS, FETCH_DONUTS_FAILURE } from '../../constants';

const INITIAL_STATE = {
}

export default function donuts(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_DONUTS_SUCCESS:
      return action.donuts;
    case FETCH_DONUTS_FAILURE:
    case FETCH_DONUTS:
    default:
      return state;
  }
}
