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

const removeUserAndUserBfs = (user, friends) => (bfs) => {
  return bfs.filter(
    (bf) => bf !== user && getUserBfs(user)(friends).indexOf(bf) === -1
  );
};

const recordScore = (friends) => {
  return friends.reduce((reduced, friend) => {
    const copy = { ...reduced };
    if (copy[friend]) copy[friend] += 10;
    else copy[friend] = 10;
    return copy;
  }, {});
};

const addVisitScore = (visitors) => (scores) => {
  const copiedScores = { ...scores };
  return visitors.reduce((reduced, visitor) => {
    const copy = { ...reduced };
    if (copy[visitor]) copy[visitor]++;
    else copy[visitor] = 1;
    return copy;
  }, copiedScores);
};

const getNames = (users) => Object.keys(users);

function problem7(user, friends, visitors) {
  const result = compose(
    getUserBfs(user),
    getBfsOfBfs(friends),
    removeUserAndUserBfs(user, friends),
    recordScore,
    addVisitScore(removeUserAndUserBfs(user, friends)(visitors)),
    getNames
  )(friends);

  return result;
}

module.exports = problem7;
