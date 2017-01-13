import { combineReducers } from 'redux';

import ClientsReducer from './clients-reducer';
import ActiveClient from './active-client-reducer';

const rootReducer = combineReducers({
  clients: ClientsReducer,
  activeClient: ActiveClient
});

export default rootReducer;
