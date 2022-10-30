const getFriends = (user, friends) => {
  let userFriends = [];
  friends.forEach((friendPair) => {
    if (!friendPair.includes(user)) return;
    if (friendPair[0] === user) userFriends.push(friendPair[1]);
    if (friendPair[1] === user) userFriends.push(friendPair[0]);
  });
  return userFriends;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
