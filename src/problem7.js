function problem7(user, friends, visitors) {
  let answer;
  const friendsDict = {};
  const score = {};

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] in friendsDict) {
      friendsDict[friends[i][0]].push(friends[i][1]);
    } else {
      friendsDict[friends[i][0]] = [friends[i][1]];
    }
    if (friends[i][1] in friendsDict) {
      friendsDict[friends[i][1]].push(friends[i][0]);
    } else {
      friendsDict[friends[i][1]] = [friends[i][0]];
    }
  }

  let friendsOfFriends = [];

  if (user in friendsDict) {
    const userFriends = friendsDict[user];
    for (let i = 0; i < userFriends.length; i++) {
      friendsOfFriends = [...friendsOfFriends, ...friendsDict[userFriends[i]]];
    }
    friendsOfFriends = new Set(friendsOfFriends);
    friendsOfFriends.delete(user);
  }

  for (const friend of friendsOfFriends) {
    if (friend in score) {
      score[friend] += 10;
    } else {
      score[friend] = 10;
    }
  }

  return answer;
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
