function problem7(user, friends, visitors) {
  const userFriend = findFriend(user, friends);
}

function findFriend(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i].includes(user) && friends[i][j] !== user)
        userFriend.push(friends[i][j]);
    }
  }
  return userFriend;
}
module.exports = problem7;
