function getFriendOfUser(user, friends) {
  const FriendOfUser = friends.reduce((acc, friendship) => {
    friendship.includes(user) &&
      acc.push(...friendship.filter((friend) => friend !== user));
    return acc;
  }, []);
  return FriendOfUser;
}

function problem7(user, friends) {
  const friendOfUser = getFriendOfUser(user, friends);
  return;
}

module.exports = problem7;
