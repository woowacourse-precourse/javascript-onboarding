function countVisitors({ friendsNetwork, visitors }) {
  visitors.forEach(name => {
    if (friendsNetwork[name]) friendsNetwork[name]['score'] += 1;
    else friendsNetwork[name] = { score: 1, friends: [] };
  });
}

function connectFriends(friendsNetwork, idA, idB) {
  if (friendsNetwork[idA]) friendsNetwork[idA]['friends'].push(idB);
  else friendsNetwork[idA] = { score: 0, friends: [idB] };
}

function problem7(user, friends, visitors) {
  const friendsNetwork = { [user]: { score: 0, friends: [] } };
  let answer = [];

  friends.forEach(([idA, idB]) => {
    connectFriends(friendsNetwork, idA, idB);
    connectFriends(friendsNetwork, idB, idA);
  });

  const userFriends = friendsNetwork[user]['friends'];

  Object.keys(friendsNetwork).forEach(name => {
    friendsNetwork[name]['friends'].forEach(friendName => {
      if (userFriends.includes(friendName)) friendsNetwork[name]['score'] += 10;
    });
  });
  countVisitors({ friendsNetwork, visitors });

  Object.keys(friendsNetwork).forEach(name => {
    if (user !== name && !userFriends.includes(name) && friendsNetwork[name]['score'] > 0)
      answer.push(name);
  });

  answer.sort((a, b) => {
    if (friendsNetwork[a].score === friendsNetwork[b].score) return a < b ? -1 : a > b ? 1 : 0;
    return friendsNetwork[b].score - friendsNetwork[a].score;
  });
  return answer;
}

module.exports = problem7;
