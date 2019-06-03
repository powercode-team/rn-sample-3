const filterEmptyKeyInObject = object => {
  const clearObject = {};

  Object.keys(object).forEach(key => {
    if ((object[key] && object[key].length) || typeof object[key] === 'boolean') {
      clearObject[key] = object[key];
    }
  });

  return clearObject;
};

export { filterEmptyKeyInObject };
