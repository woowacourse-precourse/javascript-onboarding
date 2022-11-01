function problem7(user, friends, visitors) {
  const friendObject = {};

  const userFriends = [
    ...new Set(friends.filter((array) => array.includes(user)).flat()),
  ].filter((friend) => friend !== user);

  userFriends.forEach((v) => (friendObject[v] = []));

  const friendsOfFriends = [...friends].filter((array) =>
    [...userFriends].filter((userFriend) => array.includes(userFriend))
  );

  friendsOfFriends.forEach((friendsOfFriend) => {
    userFriends.forEach((userFriend) => {
      if (
        friendsOfFriend.includes(userFriend) &&
        !friendsOfFriend.includes(user)
      ) {
        friendObject[userFriend].push(
          ...[...friendsOfFriend].filter((v) => v !== userFriend)
        );
      }
    });
  });

  return;
}

module.exports = problem7;
