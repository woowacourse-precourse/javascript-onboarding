function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

// function that returns the entire name list except the user
function getNameList(user, friends, visitors) {
  const friendName = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friendName.indexOf(friends[i][j]) === -1 && friends[i][j] !== user) {
        friendName.push(friends[i][j]);
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (friendName.indexOf(visitors[i]) === -1) {
      friendName.push(visitors[i]);
    }
  }

  return friendName;
}

// return friend's name of user
function getFriendNameOfUser(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      userFriend.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      userFriend.push(friends[i][0]);
    }
  }
  return userFriend;
}
