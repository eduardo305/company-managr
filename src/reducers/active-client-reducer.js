import { FETCH_CLIENT_SUCCESS, FETCH_CLIENT, FETCH_CLIENT_ERROR } from '../actions/action_types';

  export default function(state = { pending: true, selected: {} }, action) {
  switch (action.type) {
    case FETCH_CLIENT:
      return { ...state, pending: true };
    break;
    case FETCH_CLIENT_SUCCESS:
      return { ...state, selected: action.payload.data.data, pending: false };
      break;
    case FETCH_CLIENT_ERROR:
      return { ...state, error: action.payload, pending: false }
    default:
      return state;
  }
}
