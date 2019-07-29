import { FETCHING_ERROR, IS_LOADING } from './actionTypes';

export const fetchingError = error => ({
  type: FETCHING_ERROR,
  fetchingError: error,
});

export const fetchLoading = isLoading => ({
  type: IS_LOADING,
  isLoading
});