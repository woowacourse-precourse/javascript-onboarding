function getUserFriends(user, friends) {
  const userFriends = friends
    .filter((friends) => friends.includes(user))
    .map((friend) => (friend[0] === user ? friend[1] : friend[0]));

  return userFriends;
}

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);

  return answer;
}

module.exports = problem7;
