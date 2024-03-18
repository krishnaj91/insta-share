import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
} from "../actions/homePageActions";

const initialState = {
  commentsLoading: false,
  commentsData: null,
  commentsErr: null,
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        commentsLoading: true,
        commentsData: null,
        commentsErr: null,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        commentsData: action.payload,
        commentsErr: null,
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        commentsLoading: false,
        commentsData: null,
        commentsErr: action.payload,
      };
    default:
      return state;
  }
};

export default homePageReducer;
