const setUserMap = (userMap, [userA, userB]) => {
  userMap.set(userA, [...(userMap.get(userA) || []), userB]);
  userMap.set(userB, [...(userMap.get(userB) || []), userA]);
};

const getKnowEachOtherScore = (userMap, userA, userB) => {
  const userAFriends = userMap.get(userA);
  const userBFriends = userMap.get(userB);

  let count = 0;
  userAFriends.forEach((user) => {
    if (userBFriends.includes(user)) count++;
  });
  return count * 10;
};

function problem7(user, friends, visitors) {
  const userMap = new Map();
  friends.forEach((item) => setUserMap(userMap, item));
}

module.exports = problem7;
