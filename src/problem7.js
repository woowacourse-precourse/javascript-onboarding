function findUserFriends(user, friends) {
  const userFriends = [user];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      userFriends.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      userFriends.push(friends[i][0]);
    }
  }
  return userFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
