const findBfs = (user) => (couples) => {
  return couples.reduce((reduced, couple) => {
    const copy = reduced.slice();
    if (couple.indexOf(user) > -1) {
      const bf = couple.indexOf(user) === 1 ? couple[0] : couple[1];
      copy.push(bf);
      return copy;
    }
    return reduced;
  }, []);
};

const findFriendsOfBfs = (couples) => (bfs) => {
  const ret = bfs.reduce((reduced, bf) => {
    const copy = reduced.slice();
    copy.push(...findBfs(bf)(couples));
    return copy;
  }, []);

  return ret;
};
const exceptUser = (user) => (bfs) => {
  return bfs.filter((bf) => bf !== user);
};

const countRate = (friends) => {
  const ret = friends.reduce((reduced, friend) => {
    const copy = { ...reduced };
    if (copy[friend]) copy[friend] += 10;
    else copy[friend] = 10;
    return copy;
  }, {});
  return ret;
};

const addVisitorsToFriends = (visitors) => (friends) =>
  visitors.reduce((reduced, visitor) => {
    const copy = { ...reduced };
    if (copy[visitor]) copy[visitor]++;
    else copy[visitor] = 1;
    return copy;
  }, friends);

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((reduced, fn) => fn(reduced), arg);

function problem7(user, friends, visitors) {
  const result = compose(
    findBfs(user),
    findFriendsOfBfs(friends),
    exceptUser(user),
    countRate,
    addVisitorsToFriends(
      visitors.filter(
        (visitor) => findBfs(user)(friends).indexOf(visitor) === -1
      )
    )
  )(friends);

  return Object.keys(result);
}

console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
