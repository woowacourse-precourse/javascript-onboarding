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
  const friendsScoreDict = {};

  for (let i = 0; i < friends.length; i++) {
    const friendName1 = friends[i][0];
    const friendName2 = friends[i][1];

    if (!Object.keys(friendsScoreDict).includes(friendName1) && friendName1 != user) friendsScoreDict[friendName1] = 0;
    if (!Object.keys(friendsScoreDict).includes(friendName2) && friendName2 != user) friendsScoreDict[friendName2] = 0;
  }

  return friendsScoreDict;
}

function checkFriend(user, friendsScoreDict, friendsConnection) {
  const userFriend = friendsConnection[user];

  console.log(userFriend)

  userFriend.forEach((item) => {
    const friendsFriends = friendsConnection[item];

    friendsFriends.forEach((item) => {
      if (item != user && !friendsConnection[item].has(user)) friendsScoreDict[item] += 10;
    })
  })

  return friendsScoreDict;
}

module.exports = problem7;
