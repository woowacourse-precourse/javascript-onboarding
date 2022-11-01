function problem7(user, friends, visitors) {
  const knowFriendsPoint = 10;
  const visitTimelinePoint = 1;

  const avoidResult = [];
  const friendsMap = new Map();
  for (let i = 0; i < friends.length; i++) {
    if (!avoidResult.includes(friends[i][0])) {
      avoidResult.push(friends[i][0]);
    }

    if (friends[i][1] === user) continue;
    if (friendsMap.has(friends[i][1])) {
      friendsMap.set(
        friends[i][1],
        friendsMap.get(friends[i][1]) + knowFriendsPoint
      );
      continue;
    }
    friendsMap.set(friends[i][1], knowFriendsPoint);
  }

  const visitorsMap = new Map();
  for (let i = 0; i < visitors.length; i++) {
    if (avoidResult.includes(visitors[i])) continue;
    if (visitorsMap.has(visitors[i])) {
      visitorsMap.set(
        visitors[i],
        visitorsMap.get(visitors[i]) + visitTimelinePoint
      );
      continue;
    }
    visitorsMap.set(visitors[i], visitTimelinePoint);
  }

  const result = [...friendsMap, ...visitorsMap];
  const answer = result
    .sort((a, b) => (a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : b[1] - a[1]))
    .map((recommend) => recommend[0]);

  return answer;
}

module.exports = problem7;
