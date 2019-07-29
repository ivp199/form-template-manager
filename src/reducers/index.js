import { combineReducers } from 'redux';
import { fetchErrored, fetchIsLoading } from './fetch.reducer';
import { templatesReducer } from './templates.reducer';

export default combineReducers({
  fetchErrored,
  fetchIsLoading,
  templatesReducer,
});