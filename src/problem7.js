const compose =
  (...fns) =>
    (initialValue) =>
      fns.reduce((composed, fn) => fn(composed), initialValue);

const isNotExisting = (array, item) => array.indexOf(item) === -1;
