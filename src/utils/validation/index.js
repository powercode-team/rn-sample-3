import validate from 'validate.js';

import forms from './forms';

export default (formName, fieldName, value) => {
  const form = forms[formName];
  const field = {
    [fieldName]: form[fieldName],
  };

  const fieldValue = {
    [fieldName]: value,
  };

  return Boolean(validate(fieldValue, field));
};
