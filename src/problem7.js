function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getConnection(friends) {
  const friendsConnection = {};

  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0];
    const friendB = friends[i][1];

    if (!Object.keys(friendsConnection).includes(friendA)) friendsConnection[friendA] = new Set();
    if (!Object.keys(friendsConnection).includes(friendB)) friendsConnection[friendB] = new Set();

    friendsConnection[friendA].add(friendB);
    friendsConnection[friendB].add(friendA);
  }

  return friendsConnection;
}

function makeDict(user, friends) {
  const friendsDict = {};

  for (let i = 0; i < friends.length; i++) {
    const friendName1 = friends[i][0];
    const friendName2 = friends[i][1];

    if (!Object.keys(friendsDict).includes(friendName1) && friendName1 != user) friendsDict[friendName1] = 0;
    if (!Object.keys(friendsDict).includes(friendName2) && friendName2 != user) friendsDict[friendName2] = 0;
  }

  return friendsDict;
}

module.exports = problem7;
