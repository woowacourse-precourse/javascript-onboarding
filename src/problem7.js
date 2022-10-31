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

function calcVisitorScore(visitors, userFriends, recommendationScore) {
  for (let i = 0; i < visitors.length; i += 1) {
    if (userFriends.has(visitors[i])) continue;

    recommendationScore[visitors[i]] = recommendationScore[visitors[i]] + 1 || 1;
  }

  return recommendationScore;
}

function calcRecommendationScore(user, friends, visitors) {
  const userFriends = getFriends(user, friends);
  const friendScore = calcFriendScore(friends, userFriends);
  const recommendationScore = calcVisitorScore(visitors, userFriends, friendScore);

  return recommendationScore;
}

function getRecommendations(user, friends, visitors) {
  const recommendationScore = calcRecommendationScore(user, friends, visitors);
  const recommendationArray = Array.from(Object.keys(recommendationScore)).sort(
    (a, b) => recommendationScore[b] - recommendationScore[a] || a.localeCompare(b)
  ).slice(0, 5);

  return recommendationArray;
}

function problem7(user, friends, visitors) {
  const recommendationResult = getRecommendations(user, friends, visitors);

  return recommendationResult;
}

module.exports = problem7;
