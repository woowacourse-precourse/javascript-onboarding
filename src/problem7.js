function problem7(user, friends, visitors) {
  const friendsOfUserList = getFriends(user, friends);
  const friendsOfFriendsList = getFriendsOfFriends(
    friendsOfUserList,
    friends,
    user
  );
}

function getFriends(user, buddies) {
  const buddyIncludeUser = buddies.filter((buddy) => {
    if (buddy.includes(user)) return buddy;
  });

  return eliminateUser(buddyIncludeUser, user);
}

function eliminateUser(userList, user) {
  return [].concat(...userList).filter((person) => person !== user);
}

function getFriendsOfFriends(buddies, friends, user) {
  const buddyOfBuddy = [];
  buddies.forEach((person, i) => {
    buddyOfBuddy.push(getFriends(person, friends));
  });

  return eliminateUser(buddyOfBuddy, user);
}

module.exports = problem7;
