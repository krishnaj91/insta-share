export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  payload: id,
});

export const fetchCommentsSuccess = (data) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchCommentsError = (err) => ({
  type: FETCH_COMMENTS_ERROR,
  payload: err,
});
