import { combineReducers } from "redux";
import testReducer from "./testRecucer";
import layoutReducer from "./layoutReducers";
import homePageReducer from "./homePageReducers";

const rootReducer = combineReducers({
  test: testReducer,
  layout: layoutReducer,
  home: homePageReducer,
});

export default rootReducer;
