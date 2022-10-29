function problem7(user, friends, visitors) {
  const friendsRelation = getFriendsRelationMap(friends);

  const USER_FRIENDS_LIST = friendsRelation.get(user);
  friendsRelation.delete(user);

  const ACQUAINTANCE_SCORE = 10;
  const VISIT_SCORE = 1;

  const scores = new Map();

  const getAcquaintanceCount = (friendsList) =>
    +friendsList.filter((userId) => USER_FRIENDS_LIST.includes(userId)).length;

  Array.from(friendsRelation).map(([userId, friendsList]) =>
    scores.set(userId, getAcquaintanceCount(friendsList) * ACQUAINTANCE_SCORE)
  );

  visitors.forEach((userId) => {
    pushToMapAsSum(scores, userId, VISIT_SCORE);
  });

  return Array.from(scores)
    .filter(([userId, score]) => {
      if (USER_FRIENDS_LIST.includes(userId)) return false;
      if (score === 0) return false;
      return true;
    })
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map(([userId, _]) => userId);
}

const pushToMapAsArr = (map, key, value) => {
  if (map.has(key)) map.set(key, [...map.get(key), value]);
  else map.set(key, [value]);
};

const pushToMapAsSum = (map, key, value) => {
  if (map.has(key)) map.set(key, map.get(key) + value);
  else map.set(key, value);
};

const getFriendsRelationMap = (friends) => {
  const result = new Map();
  friends.forEach(([one, theOther]) => {
    pushToMapAsArr(result, one, theOther);
    pushToMapAsArr(result, theOther, one);
  });
  return result;
};

module.exports = problem7;
