import { FETCH_CLIENT_SUCCESS } from '../actions/action_types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CLIENT_SUCCESS:
      return { ...state, selected: action.payload.data.data };
      break;
    default:
      return state;
  }
}
