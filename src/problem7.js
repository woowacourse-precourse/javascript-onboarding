function getFriends(user, friends) {
  const friendsSet = new Set([user]);

  for (let i = 0; i < friends.length; i += 1) {
    if (friends[i][0] === user) friendsSet.add(friends[i][1]);
    if (friends[i][1] === user) friendsSet.add(friends[i][0]);
  }

  return friendsSet;
}

function calcFriendScore(friends, userFriends) {
  const recommendationScore = {};

  for (let i = 0; i < friends.length; i += 1) {
    if (userFriends.has(friends[i][0]) && !userFriends.has(friends[i][1])) {
      recommendationScore[friends[i][1]] = recommendationScore[friends[i][1]] + 10 || 10;
    }

    if (userFriends.has(friends[i][1]) && !userFriends.has(friends[i][0])) {
      recommendationScore[friends[i][0]] = recommendationScore[friends[i][0]] + 10 || 10;
    }
  }

  return recommendationScore;
}

function problem7(user, friends, visitors) {
  let recommendationResult; 

  return recommendationResult;
}

module.exports = problem7;
