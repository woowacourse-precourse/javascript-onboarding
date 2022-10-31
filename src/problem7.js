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

function initScores(friends, visitors, scoreMap) {
  const allUsers = friends.reduce((acc, cur) => {
    return [...new Set([...acc, ...cur, ...visitors])];
  });

  allUsers.forEach((user) => scoreMap.set(user, 0));
}

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const friendsOfFriends = getFriendsOfFriends(user, friends, userFriends);
  const scoreMap = new Map();

  initScores(friends, visitors, scoreMap);

  return answer;
}

module.exports = problem7;
