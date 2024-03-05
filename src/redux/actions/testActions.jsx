export const TEST_API = "TEST_API";
export const TEST_API_SUCCESS = "TEST_API_SUCCESS";
export const TEST_API_ERROR = "TEST_API_ERROR";

export const testApi = () => ({
  type: TEST_API,
});

export const testApiSuccess = (data) => ({
  type: TEST_API_SUCCESS,
  payload: data,
});

export const testApiFailure = (err) => ({
  type: TEST_API_ERROR,
  payload: err,
});
