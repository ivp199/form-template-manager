import { FETCHING_ERROR, IS_LOADING } from '../actions/actionTypes';

export const fetchErrored = (state = {}, action) => {
  switch(action.type) {
    case FETCHING_ERROR:
      return {...state, fetchingError: action.fetchingError};
    default:
      return state;
  }
}

export const fetchIsLoading = (state = {}, action) => {
  switch(action.type) {
    case IS_LOADING:
      return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
}
