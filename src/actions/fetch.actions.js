import { FETCHING_ERROR, IS_LOADING } from './actionTypes';

export const fetchingError = error => {
  if (!error) {
    return {
      type: FETCHING_ERROR,
      fetchingError: null
    }
  }

  const { status = '', statusText = ''} = error.response || {};
  let { data: { error: { message = ''} = {}} =  {} } = error.response || {};

  if (!message && error.message) {
    message = error.message;
  }

  const errorObj = {
    message,
    status,
    statusText
  }

  return {
    type: FETCHING_ERROR,
    fetchingError: errorObj
  }
};

export const fetchLoading = isLoading => ({
  type: IS_LOADING,
  isLoading
});