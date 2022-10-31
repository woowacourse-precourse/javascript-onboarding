function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getUsersFriend(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) userFriend.push(friends[i][1]);
    if (friends[i][1] === user) userFriend.push(friends[i][0]);
  }
  return userFriend;
}

module.exports = problem7;
