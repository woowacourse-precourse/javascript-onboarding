function getFriends(user, friends) {
  const friendsSet = new Set([user]);

  for (let i = 0; i < friends.length; i += 1) {
    if (friends[i][0] === user) friendsSet.add(friends[i][1]);
    if (friends[i][1] === user) friendsSet.add(friends[i][0]);
  }

  return friendsSet;
}

function problem7(user, friends, visitors) {
  let recommendationResult; 

  return recommendationResult;
}

module.exports = problem7;
