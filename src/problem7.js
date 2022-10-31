function problem7(user, friends, visitors) {
  let realUserFriend = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      realUserFriend.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      realUserFriend.push(friends[i][0]);
    }
  }
}

module.exports = problem7;
