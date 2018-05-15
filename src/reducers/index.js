import { combineReducers } from 'redux';
import sessionReducer from './session';
import devicesReducer from './devices';
import eventsReducer from './events';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  devicesState: devicesReducer,
  eventsState: eventsReducer
});

export default rootReducer;
