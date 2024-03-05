import {
  TEST_API,
  TEST_API_ERROR,
  TEST_API_SUCCESS,
} from "../actions/testActions";

const initialState = {
  testLoading: false,
  testData: null,
  testError: null,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_API:
      return {
        ...state,
        testLoading: true,
        testData: null,
        testError: null,
      };
    case TEST_API_SUCCESS:
      return {
        ...state,
        testLoading: false,
        testData: action.payload,
        testError: null,
      };
    case TEST_API_ERROR:
      return {
        ...state,
        testLoading: false,
        testData: null,
        testError: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
