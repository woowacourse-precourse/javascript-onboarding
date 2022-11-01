function problem7(user, friends, visitors) {
  var answer;
  const userFriends = getUserFriends(friends, user);
  const relatedFriends = getRelatedFriends(friends, user, userFriends);
  const scores = getScores(relatedFriends, userFriends, visitors);

  const sortedList = Array.from(scores).sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
  );
  answer = sortedList.map((it) => it[0]);
  return answer;
}

function getUserFriends(friends, user) {
  let userFriends = [];
  friends.forEach((pair) => {
    if (!pair.includes(user))
      return;
    if (pair[0] === user)
      userFriends.push(pair[1]);
    if (pair[1] === user)
      userFriends.push(pair[0]);
  });
  return userFriends;
}

function getRelatedFriends(friends, user, myFriends) {
  let relatedFriends = [];
  myFriends.forEach((pair) => {
    const userFriendsOfMyFriends = getUserFriends(friends, pair).filter(
      (friend) => friend !== user
    );
    relatedFriends = [...relatedFriends, ...userFriendsOfMyFriends];
  })
  return relatedFriends;
}

function getScores(relatedFriends, userFriends, visitors) {
  const score = new Map();
  relatedFriends.forEach((friend) => {
    score.set(friend, (score.get(friend) || 0) + 10);
  });
  visitors.forEach((visitor) => {
    if (userFriends.includes(visitor))
      return;
    score.set(visitor, (score.get(visitor) || 0) + 1);
  });
  return score;
}

module.exports = problem7;
