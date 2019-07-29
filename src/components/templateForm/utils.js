export const validateTemplate = template => {
  const {name, displayName, description, fields} = template;

  if (!name || !displayName || !description) {
    return 'Please fill up all the fields.';
  }

  if (!fields || !fields.length) {
    return 'Please add minimum one field for the template.'
  }

  if (!(/^[a-z][a-z-]*[a-z]$/.test(name))) {
    return 'Name: Only lower case alphabets and - allowed.';
  }
}

export const validateField = field => {
  const { fieldName, displayName, type, options } = field;
  if (!fieldName || !displayName || !type) {
    return 'Please fill up all the fields.';
  }

  if (!(/^[a-z][a-z-]*[a-z]$/.test(fieldName))) {
    return 'Name: Only lower case alphabets and - allowed.';
  }

  if (type.hasOptions && (!options || !options.length)) {
    return `Type: Options are required for the selected type: ${type.text}`;
  }
}