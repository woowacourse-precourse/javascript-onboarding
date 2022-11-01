function problem7(user, friends, visitors) {
  let getFriends = [];

  for (i in friends) {
    if (friends[i][0] == user) {
      getFriends.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      getFriends.push(friends[i][0]);
    }
  }

  let visitedFriends = [];

  for (i in friends) {
    for (j in getFriends) {
      if (friends[i][0] == getFriends[j] || friends[i][1] == getFriends[j]) {
        visitedFriends.push(friends[i]);
      }
    }
  }
  let getScore = new Set(visitedFriends);
  visitedFriends = [...getScore]; //중복제거
}

module.exports = problem7;
