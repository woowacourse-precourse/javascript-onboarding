const extractUserFriends = (user, friends) =>
  friends
    .filter((friend) => friend.includes(user))
    .flat()
    .filter((friend) => friend !== user);

function problem7(user, friends, visitors) {
  const userFriends = extractUserFriends(user, friends);

  return userFriends;
}

module.exports = problem7;
