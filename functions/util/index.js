export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

export const formatLabels = (arr) =>
  (!isEmpty(arr) &&
    arr.map((e) => ({ name: e.Name, confidence: e.Confidence }))) ||
  [];
