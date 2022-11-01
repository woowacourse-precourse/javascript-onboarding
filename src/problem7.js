function problem7(user, friends, visitors) {
  return recommendFriendApp(user, friends, visitors);
}

function recommendFriendApp(user, friends, visitors) {
  const friendRelationship = createRelationship(friends);
  const visitorScoreBoard = calcVisitorScore(user, friendRelationship, visitors);
  const scoreBoard = calcFriendScore(user, friendRelationship, visitorScoreBoard);
  console.log(scoreBoard);
  return sortByScore(scoreBoard).slice(0, 5);
}

function createRelationship(friends) {
  return friends.reduce((dict, [friendA, friendB]) => {
    dict.set(friendA, (dict.get(friendA) || []).concat(friendB));
    dict.set(friendB, (dict.get(friendB) || []).concat(friendA));
    return dict;
  }, new Map());
}

function calcVisitorScore(user, friendRelationship, visitors) {
  return visitors.reduce((dict, visitor) => {
    if (!(friendRelationship.get(user)||[]).includes(visitor) && visitor !== user) dict.set(visitor, dict.get(visitor) + 1 || 1);
    return dict;
  }, new Map());
}

function calcFriendScore(user, friendRelationship, scoreBoard) {
  for (let userFriend of (friendRelationship.get(user)||[])) {
    friendRelationship.get(userFriend).forEach((friend) => {
      if (!friendRelationship.get(user).includes(friend) && friend !== user) scoreBoard.set(friend, scoreBoard.get(friend) + 10 || 10);
    });
  }
  return scoreBoard;
}

function sortByScore(scoreBoard) {
  return Array.from(scoreBoard)
    .sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
    .map(([userId, score]) => userId);
}

module.exports = problem7;
