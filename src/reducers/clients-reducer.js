import { FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS, FETCH_CLIENTS_ERROR } from '../actions/action_types';

export default function(state = { all: [], pending: true }, action) {
  switch( action.type ) {
    case FETCH_CLIENTS:
      return { ...state, pending: true };
    break;
    case FETCH_CLIENTS_SUCCESS:
      return { ...state, all: action.payload.data.data, pending: false };
    break;
    case FETCH_CLIENTS_ERROR:
      return { ...state, error: action.payload, pending: false }
    default:
      return state;
  }
}
