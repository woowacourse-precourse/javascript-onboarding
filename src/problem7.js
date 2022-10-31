function problem7(user, friends, visitors) {
  const userFriends = friends
    .filter((friend) => friend.includes(user))
    .flatMap((friend) => friend.filter((id) => id !== user));
}

module.exports = problem7;
