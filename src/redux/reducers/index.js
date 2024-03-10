import { combineReducers } from "redux";
import testReducer from "./testRecucer";
import layoutReducer from "./layoutReducers";

const rootReducer = combineReducers({
  test: testReducer,
  layout: layoutReducer,
});

export default rootReducer;
