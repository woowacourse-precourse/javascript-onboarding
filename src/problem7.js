function problem7(user, friends, visitors) {
  return recommendFriendApp([user, friends, visitors]);
}

function recommendFriendApp([user, friendListArr, visitorListArr]) {
  const relationshipMap = createRelationshipMap(friendListArr);
  const visitorScoreMap = calVisitorScoreMap(visitorListArr);
  const scoreListMap = calcScoreMap(user, relationshipMap, visitorScoreMap);
  return sortByScoreToNameArr(scoreListMap).slice(0,5);
}

function createRelationshipMap(friendListArr) {
  return friendListArr.reduce((relationshipMap, [friendA, friendB]) => {
    relationshipMap.set(friendA, (relationshipMap.get(friendA) || []).concat(friendB));
    relationshipMap.set(friendB, (relationshipMap.get(friendB) || []).concat(friendA));
    return relationshipMap;
  }, new Map());
}

module.exports = problem7;
