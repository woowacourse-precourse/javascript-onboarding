function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getConnection(friends) {
  const friendsConnection = {};

  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0];
    const friendB = friends[i][1];

    if (!Object.keys(friendsConnection).includes(friendA)) friendsConnection[friendA] = new Set();
    if (!Object.keys(friendsConnection).includes(friendB)) friendsConnection[friendB] = new Set();

    friendsConnection[friendA].add(friendB);
    friendsConnection[friendB].add(friendA);
  }

  return friendsConnection;
}

module.exports = problem7;
