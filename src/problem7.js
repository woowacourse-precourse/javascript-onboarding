function getUserFriend(friends, user) {
  let userFriend = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends[i].forEach((value) => {
        if (value !== user) userFriend.push(value);
      });
    }
  }
  return userFriend;
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriend = getUserFriend(friends, user);
  return answer;
}

module.exports = problem7;
