function problem7(user, friends, visitors) {
  var answer = [];
  var userFriends = [];
  var friendsCandidate = [];
  var scoreMap = new Map();

  friends.forEach((pair) => {
    if (pair.includes(user)) {
      userFriends.push(pair[1 - pair.indexOf(user)]);
    } else friendsCandidate.push(pair);
  });

  for (var i = friendsCandidate.length - 1; i >= 0; i--) {
    if (
      friendsCandidate[i].filter((one) => userFriends.includes(one)).length == 2
    )
      friendsCandidate.splice(i, 1);
  }

  userFriends.forEach((userFriend) => {
    friendsCandidate.forEach((pair) => {
      if (pair.includes(userFriend)) {
        var newFriend = pair[1 - pair.indexOf(userFriend)];
        if (!scoreMap.has(newFriend)) scoreMap.set(newFriend, 10);
        else scoreMap.set(newFriend, scoreMap.get(newFriend) + 10);
      }
    });
  });

  visitors.forEach((one) => {
    if (!userFriends.includes(one)) {
      if (!scoreMap.has(one)) scoreMap.set(one, 1);
      else {
        scoreMap.set(one, scoreMap.get(one) + 1);
      }
    }
  });

  answer = Array.from(scoreMap)
    .sort((a, b) => {
      if (a[1] == b[1]) a[0] - b[0];
      else a[1] - b[1];
    })
    .slice(0, 5)
    .map((map) => map[0]);

  return answer;
}

module.exports = problem7;
