export const shrinkFormValues = (values) => {
  let newValues = { ...values };
  const objKeys = Object.keys(values);
  for (let i = 0; i < objKeys.length; i++) {
    newValues[objKeys[i]] = shrinkValue(values[objKeys[i]]);
  }
  return(newValues);
};

const shrinkValue = (value) => value.replace(/ /g, '');