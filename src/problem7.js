const judgeFriend = (me, pair) => (pair[0] === me ? pair[1] : pair[0]);

const getFriends = (me, friends) => {
  return friends.reduce((acc, pair) => {
    if (pair.includes(me)) return [...acc, judgeFriend(me, pair)];
    return acc;
  }, []);
};

const getMyFriendsFriends = (myFriends, friendMap) => {
  return myFriends.reduce(
    (acc, myFriend) => [...acc, getFriends(myFriend, friendMap)],
    []
  );
};

const getAcquaintance = (me, [myFriends, friendMap]) => {
  const myFriendsFriends = getMyFriendsFriends(myFriends, friendMap);
  return myFriendsFriends.reduce(
    (acc, friends) => [
      ...acc,
      ...friends.filter(
        (friend) => friend !== me && !myFriends.includes(friend)
      ),
    ],
    []
  );
};

const getScoreObjWithAcquaintance = (acquaintance) =>
  acquaintance.reduce(
    (acc, friend) => ({ ...acc, [friend]: (acc[friend] || 0) + 10 }),
    {}
  );

const getScoreObjWithVisitors = ([myFriends, visitors], scoreObj) =>
  visitors.reduce((acc, visitor) => {
    if (myFriends.includes(visitor)) return acc;
    return { ...acc, [visitor]: (acc[visitor] || 0) + 1 };
  }, scoreObj);

const sortRule = (a, b) => (a[1] === b[1] ? a[0] > b[0] : b[1] - a[1]);

const getRecommendedFriends = (scoreObj) => {
  const sortedScoreArr = Object.entries(scoreObj).sort(sortRule);
  return sortedScoreArr.slice(0, 5).map(([friend, _]) => friend);
};

function problem7(user, friends, visitors) {
  const myFriends = getFriends(user, friends);
  const acquaintance = getAcquaintance(user, [myFriends, friends]);
  const acquaintanceObj = getScoreObjWithAcquaintance(acquaintance);
  const scoreObj = getScoreObjWithVisitors(
    [myFriends, visitors],
    acquaintanceObj
  );
  return getRecommendedFriends(scoreObj);
}

console.log(
  problem7(
    "Eliza",
    [
      ["Cecil", "Hobart"],
      ["Austyn", "Mara"],
      ["Adonis", "Eliza"],
      ["Lamont", "Retha"],
      ["Jan", "Christa"],
      ["Milton", "Retha"],
      ["Josh", "Eliza"],
      ["Eliza", "Jesus"],
      ["Retha", "Eliza"],
    ],
    ["Retha", "Rosalia", "Hobart", "Jayne"]
  )
);
module.exports = problem7;
