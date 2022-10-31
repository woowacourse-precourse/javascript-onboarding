function getFriendList(friends) {
  let friendDict = {};
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!friendDict[friends[i][j]]) {
        friendDict[friends[i][j]] = [friends[i][1 - j]];
      } else {
        friendDict[friends[i][j]].push(friends[i][1 - j]);
      }
    }
  }
  return friendDict;
}

function problem7(user, friends, visitors) {
  var answer;
  let friendDict = getFriendList(friends);

  return answer;
}

module.exports = problem7;
