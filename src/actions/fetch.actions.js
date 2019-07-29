import { FETCHING_ERROR, IS_LOADING } from './actionTypes';

export const fetchingError = error => {
  if (!error) {
    return {
      type: FETCHING_ERROR,
      fetchingError: null
    }
  }

  const { data: { message = ''} =  {}, status, statusText } = error.response || {};
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