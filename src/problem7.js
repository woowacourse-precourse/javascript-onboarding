const compose =
  (...fns) =>
    (initialValue) =>
      fns.reduce((composed, fn) => fn(composed), initialValue);

const isNotExisting = (array, item) => array.indexOf(item) === -1;

const getUserBfs = (user) => (friends) => {
  return friends.reduce((reduced, couple) => {
    const copy = reduced.slice();
    const [_, bf] = couple.indexOf(user) === 0 ? couple : [...couple].reverse();
    if (isNotExisting(copy, bf)) copy.push(bf);
    return copy;
  }, []);
};
