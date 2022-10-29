function connectFriends({ friendsNetwork, idA, idB }) {
  if (friendsNetwork[idA]) friendsNetwork[idA][friends].push(idB);
  else friendsNetwork[idA] = { score: 0, friends: [idB] };
}
function problem7(user, friends, visitors) {
  const friendsNetwork = {};

  friends.forEach((idA, idB) => {
    connectFriends({ friendsNetwork, idA, idB });
    connectFriends({ friendsNetwork, idB, idA });
  });

  var answer;
  return answer;
}

module.exports = problem7;
