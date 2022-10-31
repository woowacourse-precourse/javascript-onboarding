function problem7(user, friends, visitors) {
  const friendsOfUserList = getFriends(user, friends); // ["donut", "shakevan"]
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

module.exports = problem7;
