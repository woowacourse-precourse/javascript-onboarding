function findUserFriends(friends) {
  let userFriends = [];

  friends.forEach((friend) => {
    if (friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });

  return userFriends;
}
