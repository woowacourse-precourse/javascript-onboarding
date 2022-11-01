function problem7(user, friends, visitors) {
  let getFriends = [];

  for (i in friends) {
    if (friends[i][0] == user) {
      getFriends.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      getFriends.push(friends[i][0]);
    }
  }
}

module.exports = problem7;
