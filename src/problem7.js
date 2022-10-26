const setUserMap = (userMap, [userA, userB]) => {
  userMap.set(userA, [...(userMap.get(userA) || []), userA]);
  userMap.set(userB, [...(userMap.get(userB) || []), userB]);
};

function problem7(user, friends, visitors) {
  const userMap = new Map();
  friends.forEach((item) => setUserMap(userMap, item));
}

module.exports = problem7;
