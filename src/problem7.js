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

  const answer = [];
  return answer;
}

module.exports = problem7;
