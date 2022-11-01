function getUserFriend(user, friends) {
  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    let isFriend = friends[i].indexOf(user);
    if (isFriend !== -1) {
      userFriend.push(friends[i][1 - isFriend]);
    }
  }
  return userFriend;
}

function problem7(user, friends, visitors) {
  var answer = [];

  return answer;
}

module.exports = problem7;
