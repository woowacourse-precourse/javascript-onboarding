function getUserFriends(user, friends) {
  const userFriends = friends
    .filter((friends) => friends.includes(user))
    .map((friend) => (friend[0] === user ? friend[1] : friend[0]));

  return userFriends;
}

function getFriendsOfFriends(user, friends, userFriends) {
  const friendsOfFriends = friends
    .filter(
      (friend) =>
        !friend.includes(user) &&
        friend.some((friend) => userFriends.includes(friend))
    )
    .map((friend) => (userFriends.includes(friend[0]) ? friend[1] : friend[0]));

  return [...new Set(friendsOfFriends)];
}

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const friendsOfFriends = getFriendsOfFriends(user, friends, userFriends);

  return answer;
}

module.exports = problem7;
