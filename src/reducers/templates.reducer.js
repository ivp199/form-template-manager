import { GET_ALL_TEMPLATES, GET_TEMPLATE, SAVE_TEMPLATE, EDIT_TEMPLATE, DELETE_TEMPLATE } from '../actions/actionTypes';

export const templatesReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_ALL_TEMPLATES:
      return {
        ...state,
        templates: action.data.templates,
      };

    case GET_TEMPLATE:
      return {
        ...state,
        template: action.data.template,
      }

    case SAVE_TEMPLATE:
      return {
        ...state,
        templateActionSuccesful: true,
      }

    case DELETE_TEMPLATE:
      return {
        ...state,
        templateActionSuccesful: true,
      }

    default:
      return state;
  }
}

