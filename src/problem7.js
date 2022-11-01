function problem7(user, friends, visitors) {
  return recommendFriendApp([user, friends, visitors]);
}

function recommendFriendApp([user, friendListArr, visitorListArr]) {
  const relationshipMap = createRelationshipMap(friendListArr);
  const scoreListMap = calcScoreMap(user, relationshipMap, calcVisitorScoreMap(visitorListArr));
  return sortByScoreToNameArr(scoreListMap).slice(0,5);
}

function createRelationshipMap(friendListArr) {
  return friendListArr.reduce((relationshipMap, [friendA, friendB]) => {
    relationshipMap.set(friendA, (relationshipMap.get(friendA) || []).concat(friendB));
    relationshipMap.set(friendB, (relationshipMap.get(friendB) || []).concat(friendA));
    return relationshipMap;
  }, new Map());
}

function calcVisitorScoreMap(visitorListArr) {
  return visitorListArr.reduce((scoreListMap, visitor) => {
    scoreListMap.set(visitor, scoreListMap.get(visitor) + 1 || 1);
    return scoreListMap;
  }, new Map());
}

function calcScoreMap(user, relationshipMap, scoreListMap) {
  for (let userFriend of relationshipMap.get(user)) {
    relationshipMap.get(userFriend).forEach((friend) => {
      if (!relationshipMap.get(user).includes(friend) && friend !== user) scoreListMap.set(friend, scoreListMap.get(friend) + 10 || 10);
    });
  }
  return scoreListMap;
}

function sortByScoreToNameArr(scoreListMap) {
  return Array.from(scoreListMap).sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])).map(friendInfo=>friendInfo[0]);
}

module.exports = problem7;
