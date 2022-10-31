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

function FriendsOfFriends(userFriends, friends, user) {
  const scores = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < userFriends.length; j++) {
      if (friends[i][0] === userFriends[j] && friends[i][1] !== user)
        scores.push(friends[i][1]);
      if (friends[i][1] === userFriends[j] && friends[i][0] !== user)
        scores.push(friends[i][0]);
    }
  }
  return scores;
}

module.exports = problem7;
