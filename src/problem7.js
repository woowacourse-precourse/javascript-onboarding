const getFriendGrpah = (friends) => {
  const friendGraph = {};

  for (const [nameA, nameB] of friends) {
    friendGraph[nameA] = (friendGraph[nameA] || new Set()).add(nameB);
    friendGraph[nameB] = (friendGraph[nameB] || new Set()).add(nameA);
  }
  return friendGraph;
};

const getRecommendScore = (recommends, userFriends, visitors) => {
  const RECOMMEND_SCORE = 10;
  const VISIT_SCORE = 1;
  const recommendScore = {};

  for (const [name, friendSet] of Object.entries(recommends)) {
    for (const friend of friendSet) {
      if (userFriends.has(friend)) {
        recommendScore[name] = (recommendScore[name] || 0) + RECOMMEND_SCORE;
      }
    }
  }

  for (const visitor of visitors) {
    recommendScore[visitor] = (recommendScore[visitor] || 0) + VISIT_SCORE;
  }
  return recommendScore;
};

const isRecommendFriend = (name, recommendObj, userName, userFriends) => {
  const MIN_SCORE = 1;

  if (name === userName) return false;
  if (userFriends.has(name)) return false;
  if (recommendObj[name] < MIN_SCORE) return false;
  return true;
};

function problem7(user, friends, visitors) {
  const MAX_NUMBER = 5;
  const friendGraph = getFriendGrpah(friends);
  const userFriends = friendGraph[user];
  const recommendScore = getRecommendScore(friendGraph, userFriends, visitors);

  return Object.keys(recommendScore)
    .filter((name) =>
      isRecommendFriend(name, recommendScore, user, userFriends)
    )
    .sort((nameA, nameB) => {
      const scoreA = recommendScore[nameA];
      const scoreB = recommendScore[nameB];

      if (scoreA < scoreB) return 1;
      if (scoreA > scoreB) return -1;
      if (nameA > nameB) return 1;
      return nameA < nameB ? -1 : 0;
    })
    .slice(0, MAX_NUMBER);
}

module.exports = problem7;
