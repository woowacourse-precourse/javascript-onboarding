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
  const VISIT_SCORE = 1;
  const scores = new Map();

  Array.from(friendRelation).map(([userId, friends]) => {
    const score =
      Number(friends.filter((userId) => userFriends.includes(userId)).length) *
      FRIEND_SCORE;
    scores.set(userId, score);
  });

  visitors.forEach((userId) => {
    if (scores.has(userId))
      scores.set(userId, scores.get(userId) + VISIT_SCORE);
    else scores.set(userId, VISIT_SCORE);
  });

  const answer = [];
  return answer;
}

module.exports = problem7;
