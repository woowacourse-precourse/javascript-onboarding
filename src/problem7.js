const compose =
  (...fns) =>
    (initialValue) =>
      fns.reduce((composed, fn) => fn(composed), initialValue);

const isNotExisting = (array, item) => array.indexOf(item) === -1;

const getUserFriends = (user) => (friends) => {
  return friends.reduce((reduced, [left, right]) => {
    const copy = reduced.slice();
    const [_, crew] = left === user ? [ left, right] : [right, left];
    if (isNotExisting(copy,crew)) copy.push(crew);
    return copy;
  }, []);
};

const getFriends = (friends) => (users) => {
  return users.reduce((reduced, user) => getUserFriends(user)(friends), []);
};

const removeDupUsers =
  (...users) =>
    (array) => {
      return array.filter((v) => users.indexOf(v) === -1);
    };

const findNameExisting = (array, obj) => array.find(({name}) => name === obj);

const recordScore = (friends) => {
  return friends.reduce((reduced, friend) => {
    const copy = [ ...reduced ];
    const existing = findNameExisting(copy, friend)
    if (existing) existing.score += 10;
    else copy.push({name: friend, score: 10})
    return copy;
  }, []);
};

const addVisitScore = (visitors) => (scores) => {
  const copiedScores = [ ...scores ];
  return visitors.reduce((reduced, visitor) => {
    const copy = [ ...reduced ];
    const existing = findNameExisting(reduced, visitor);
    if (existing) existing.score+=1;
    else copy.push({name: visitor, score: 1})
    return copy;
  }, copiedScores);
};

const sort = (users) => users.sort((a, b) => a.score > a.score);
const limit = (number) => (array) => array.slice(0, number );
const getNames = (users) => users.map(({name}) => name)

function problem7(user, friends, visitors) {
  return compose(
    getUserFriends(user),
    getFriends(friends),
    removeDupUsers(user, ...getUserFriends(user)(friends)),
    recordScore,
    addVisitScore(removeDupUsers(user, ...getUserFriends(user)(friends))(visitors)),
    sort,
    limit(5),
    getNames
  )(friends);
}


module.exports = problem7;
