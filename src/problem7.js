function problem7(user, friends, visitors) {
  const friendRelation = new Map();
  const pushToMap = (key, value) => {
    if (friendRelation.has(key))
      friendRelation.set(key, [...friendRelation.get(key), value]);
    else friendRelation.set(key, [value]);
  };
  friends.forEach(([one, theOther]) => {
    pushToMap(one, theOther);
    pushToMap(theOther, one);
  });

  const userFriends = friendRelation.get(user);
  friendRelation.delete(user);

  const FRIEND_SCORE = 10;
  const scores = Array.from(friendRelation).map(([userId, friends]) => {
    const score =
      Number(friends.filter((userId) => userFriends.includes(userId)).length) *
      FRIEND_SCORE;
    return [userId, score];
  });

  const answer = [];
  return answer;
}

module.exports = problem7;
