const LENGTH_RECOMMEND_FRIEND = 5;

function problem7(user, friends, visitors) {
  const relationList = makeFriendsList(friends);
  const usersFriends = relationList[user] || [];
  const friendOfFriendList = getFriendOfFriend({
    user,
    relationList,
    usersFriends,
  });
  const scoreList = scoreFriends(friendOfFriendList);
  scoreVisitors(scoreList, visitors, usersFriends);

  return recommendFriends(scoreList, LENGTH_RECOMMEND_FRIEND);
}

function makeFriendsList(friends) {
  const friendsList = {};

  friends.forEach(([leftName, rightName]) => {
    if (friendsList[leftName]) friendsList[leftName].push(rightName);
    else friendsList[leftName] = [rightName];
    if (friendsList[rightName]) friendsList[rightName].push(leftName);
    else friendsList[rightName] = [leftName];
  });

  return friendsList;
}

function getFriendOfFriend({ user, relationList, usersFriends }) {
  const friendsOfFriends = [];

  for (let i = 0; i < usersFriends.length; i++) {
    const friendsSet = relationList[usersFriends[i]];

    friendsSet.forEach((friendOfFriend) => {
      if (friendOfFriend !== user && !usersFriends.includes(friendOfFriend)) {
        friendsOfFriends.push(friendOfFriend);
      }
    });
  }

  return friendsOfFriends;
}

function scoreFriends(friendOfFriendList) {
  const scoreMap = new Map();
  friendOfFriendList.forEach((fof) => {
    if (scoreMap.has(fof)) {
      const score = scoreMap.get(fof);
      scoreMap.set(fof, score + 10);
    } else {
      scoreMap.set(fof, 10);
    }
  });

  return scoreMap;
}

function scoreVisitors(scoreList, visitors, usersFriends) {
  visitors.forEach((visitor) => {
    if (scoreList.has(visitor)) {
      const score = scoreList.get(visitor);
      scoreList.set(visitor, score + 1);
    } else if (!usersFriends.includes(visitor)) {
      scoreList.set(visitor, 1);
    }
  });
}

function recommendFriends(scoreList, length) {
  let ArrScoreList = [...scoreList]; // 배열로 만들기
  ArrScoreList.sort(ascendingSort);

  let NameList = ArrScoreList.map((score) => score[0]);
  return NameList.splice(0, length);
}

function ascendingSort(a, b) {
  [name1, score1] = a;
  [name2, score2] = b;
  if (score1 > score2) return -1;
  if (score1 < score2) return 1;
  if (score1 === score2) {
    if (name1 > name2) return 1;
    if (name1 <= name2) return -1;
  }
}

module.exports = problem7;
