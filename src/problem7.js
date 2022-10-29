function getUserFriends(user, friends) {
  return friends
    .filter((friends) => friends.includes(user))
    .map((friends) => (friends[0] !== user ? friends[0] : friends[1]));
}

function getFriendsOfFriends(user, userFriends, friends) {
  const friensdOfUserFriends = friends
    .filter(
      (friends) =>
        !friends.includes(user) && friends.some((x) => userFriends.includes(x))
    )
    .map((friends) =>
      userFriends.includes(friends[0]) ? friends[1] : friends[0]
    );
  return friensdOfUserFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
module.exports = problem7;
