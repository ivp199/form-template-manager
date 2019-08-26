export const validateTemplate = template => {
  const {name, displayName, description, fields} = template;
  const error = {};

  if (!name) {
    error.name = 'Please enter the name.'
  } else if (!(/^[a-z][a-z-]*[a-z]$/.test(name))) {
    error.name = 'Only lower case alphabets and - allowed.';
  }

  if (!displayName) {
    error.displayName = 'Please enter the display name.'
  }

  if (!description) {
    error.description = 'Please enter the description.'
  }

  if (!fields || !fields.length) {
      error.generic = 'Please add minimum one field for the template.'
  }

  return Object.entries(error).length === 0 ? null : error;
}

const checkIfKeyWithValueAlreadyAdded = (addedFields, key, value) => {
  for(let i = 0; i < addedFields.length; i++) {
    if (addedFields[i][key] === value) {
      return true;
    }
  }
  return false;
}

export const validateField = (addedFields, field) => {
  const { fieldName, displayName, type, options } = field;
  const error = {};

  if (!fieldName) {
    error.fieldName = 'Please enter the name.'
  } else if (!(/^[a-z][a-z-]*[a-z]$/.test(fieldName))) {
    error.fieldName = 'Only lower case alphabets and - allowed.';
  } else if (checkIfKeyWithValueAlreadyAdded(addedFields, 'fieldName', fieldName)) {
    error.fieldName = 'Field with this name is already present. Use other name.'
  }

  if (!displayName) {
    error.displayName = 'Please enter the display name.'
  } else if (checkIfKeyWithValueAlreadyAdded(addedFields, 'displayName', displayName)) {
    error.displayName = 'Field with this display name is already present. Use other name.'
  }

  if (Object.entries(type).length === 0 ) {
    error.type = 'Please select a type.'
  }

  if (type.hasOptions && (!options || !options.length)) {
    error.generic = `Options are required for the selected type: ${type.text}`;
  }

  return Object.entries(error).length === 0 ? null : error;
}