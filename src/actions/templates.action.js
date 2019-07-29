import axios from 'axios';
import { GET_ALL_TEMPLATES, GET_TEMPLATE, SAVE_TEMPLATE, EDIT_TEMPLATE, DELETE_TEMPLATE } from './actionTypes';
import { fetchingError, fetchLoading} from './fetch.actions';

const templatesFetched = data => {
  return {
    type: GET_ALL_TEMPLATES,
    data,
  }
};

const templateFetched = data => {
  return {
    type: GET_TEMPLATE,
    data,
  }
};

const templateSaved = data => {
  return {
    type: SAVE_TEMPLATE,
    data
  }
}

const templateDeleted = data => {
  return {
    type: DELETE_TEMPLATE,
    data
  }
}

export const getAllTemplates = () => {
  const url = `http://localhost:8080/api/templates`;
  return dispatch => {
    dispatch(fetchLoading(true));
    axios.get(url)
      .then(response => {
        dispatch(templatesFetched(response.data));
        dispatch(fetchLoading(false));
      })
      .catch(err => {
        dispatch(fetchingError(err));
        dispatch(fetchLoading(false));
      })
  }
}

export const getTemplateById = id => {
  const url = `http://localhost:8080/api/templates/${id}`;
  return dispatch => {
    dispatch(fetchLoading(true));
    axios.get(url)
      .then(response => {
        dispatch(templateFetched(response.data));
        dispatch(fetchLoading(false));
      })
      .catch(err => {
        dispatch(fetchingError(err));
        dispatch(fetchLoading(false));
      })
  }
}

export const saveTemplate = template => {
  const url = `http://localhost:8080/api/templates`;
  return dispatch => {
    dispatch(fetchLoading(true));
    axios.post(url, { template })
      .then(response => {
        dispatch(templateSaved(response.data));
        dispatch(fetchLoading(false));
      })
      .catch(err => {
        dispatch(fetchingError(err));
        dispatch(fetchLoading(false));
      })
  }
}

export const deleteTemplate = id => {
  const url = `http://localhost:8080/api/templates/${id}`;
  return dispatch => {
    dispatch(fetchLoading(true));
    axios.delete(url)
      .then(response => {
        dispatch(templateDeleted(response.data));
        dispatch(getAllTemplates());
      })
      .catch(err => {
        dispatch(fetchingError(err));
        dispatch(fetchLoading(false));
      })
  }
}
