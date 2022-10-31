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

const getBfsOfBfs = (friends) => (users) => {
  return users.reduce((reduced, user) => getUserBfs(user)(friends), []);
};

const removeDupUsers =
  (...users) =>
    (array) => {
      return array.filter((v) => users.indexOf(v) === -1);
    };

const recordScore = (friends) => {
  return friends.reduce((reduced, friend) => {
    const copy = { ...reduced };
    if (copy[friend]) copy[friend] += 10;
    else copy[friend] = 10;
    return copy;
  }, {});
};
