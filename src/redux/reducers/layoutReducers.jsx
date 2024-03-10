import { COLLAPSE_SIDEBAR, SWITCH_THEME } from "../actions/layoutActions";

const initialState = {
  isDark: false,
  collapse: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, isDark: action.payload };
    case COLLAPSE_SIDEBAR:
      return { ...state, collapse: action.payload };
    default:
      return state;
  }
};

export default layoutReducer;
