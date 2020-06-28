import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import setUserReducer from './setUser.reducer';

const rootReducer = combineReducers({
	counter: counterReducer,
	setUser: setUserReducer
});

export default rootReducer;
