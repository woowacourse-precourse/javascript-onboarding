function problem7(user, friends, visitors) {
  return recommendFriendApp([user, friends, visitors]);
}

function recommendFriendApp([user, friendListArr, visitorListArr]) {
  const relationshipMap = createRelationshipMap(friendListArr);
  const visitorScoreMap = calVisitorScoreMap(visitorListArr);
  const scoreListMap = calcScoreMap(user, relationshipMap, visitorScoreMap);
  return sortByScoreToNameArr(scoreListMap).slice(0,5);
}

module.exports = problem7;
