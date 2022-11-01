function checkTogetherKnowingFriends(user, usersList, friendsMap) {
  const usersFriends = friendsMap.get(user);
  for (const person of usersList.keys()) {
    if (person === user) continue;
    if (usersFriends.includes(person)) continue;
    for (const friend of friendsMap.get(person)) {
      if (usersFriends.includes(friend)) usersList.set(person, usersList.get(person) + 10);
    }
  }
}

module.exports = checkTogetherKnowingFriends;
