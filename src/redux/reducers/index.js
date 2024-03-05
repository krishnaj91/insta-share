import { combineReducers } from 'redux';
import testReducer from './testRecucer';

const rootReducer = combineReducers({
    test: testReducer,
   
});

export default rootReducer;
