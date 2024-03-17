import {
  COLLAPSE_SIDEBAR,
  HOME_PROFILE_PIC_SIZE,
  PRIME_REACT_SIZES,
  SWITCH_THEME,
} from "../actions/layoutActions";

const initialState = {
  isDark: false,
  collapse: false,
  size: "normal",
  postProfileSize:'45px'
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, isDark: action.payload };
    case COLLAPSE_SIDEBAR:
      return { ...state, collapse: action.payload };
    case PRIME_REACT_SIZES:
      return { ...state, size: action.payload };
    case HOME_PROFILE_PIC_SIZE:
      return { ...state, postProfileSize: action.payload };
    default:
      return state;
  }
};

export default layoutReducer;
