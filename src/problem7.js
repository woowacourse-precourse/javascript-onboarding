function problem7(user, friends, visitors) {
  var answer;
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
}

module.exports = problem7;
