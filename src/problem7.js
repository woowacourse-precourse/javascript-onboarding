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

function checkScore(friendsOfFriends, visitors, scoreMap) {
  friendsOfFriends.forEach((friend) =>
    scoreMap.set(friend, scoreMap.get(friend) + 10)
  );

  visitors.forEach((friend) => scoreMap.set(friend, scoreMap.get(friend) + 1));
}

function getRecommended(scoreMap) {
  return [...scoreMap]
    .sort((a, b) => {
      if (a[1] === b[1]) return 1;
      return b[1] - a[1];
    })
    .slice(0, 5)
    .filter((score) => score[1] !== 0)
    .map((user) => user[0]);
}

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const friendsOfFriends = getFriendsOfFriends(user, friends, userFriends);
  const scoreMap = new Map();

  initScores(friends, visitors, scoreMap);

  checkScore(friendsOfFriends, visitors, scoreMap);

  // 원래 친구였던 유저 제거
  userFriends.forEach((friend) => scoreMap.delete(friend));

  const answer = getRecommended(scoreMap);

  return answer;
}

module.exports = problem7;
