import { FETCH_CLIENTS_SUCCESS } from '../actions/action_types';

export default function(state = [], action) {
  switch( action.type ) {
    case 'FETCH_CLIENTS_SUCCESS':
      return { ...state, all: action.payload.data.data };
    break;
    default:
      return state;
  }
}
