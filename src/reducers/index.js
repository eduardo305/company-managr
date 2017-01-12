import { combineReducers } from 'redux';

import ClientsReducer from './clients-reducer';
import ActiveClient from './active-client-reducer';

const rootReducer = combineReducers({
  all: ClientsReducer,
  activeClient: ActiveClient
});

export default rootReducer;
