const getUserFriends = (friendList, user) => {
  const userFriends = [];

  friendList.forEach(([userA, userB]) => {
    if (userA === user) userFriends.push(userB);
    if (userB === user) userFriends.push(userA);
  });

  return userFriends;
};

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(friends, user);
}

module.exports = problem7;
