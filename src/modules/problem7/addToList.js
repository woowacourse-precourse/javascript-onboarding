function addToList(user1, user2, usersList, friendsMap) {
  if (!usersList.has(user1)) usersList.set(user1, 0);
  friendsMap.set(user1, [...(friendsMap.get(user1) ?? []), user2]);
}

module.exports = addToList;
