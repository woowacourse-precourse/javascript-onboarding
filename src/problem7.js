const LENGTH_RECOMMEND_FRIEND = 5;

function problem7(user, friends, visitors) {
  const relationList = makeFriendsList(friends);
  const usersFriends = getUsersFriends(user, relationList);
  const friendOfFriendList = getFriendOfFriend({
    user,
    relationList,
    usersFriends,
  });
  const scoreList = scoreFriends(friendOfFriendList);
  scoreVisitors(scoreList, visitors, usersFriends);

  return recommendFriends(scoreList, LENGTH_RECOMMEND_FRIEND);
}
// 추천 친구의 이름만 반환하는 함수
function recommendFriends(scoreList, length) {
  let ArrScoreList = [...scoreList]; // 배열로 만들기
  ArrScoreList.sort(ascendingSort);

  let NameList = ArrScoreList.map((score) => score[0]);
  return NameList.splice(0, length);
}

function getUsersFriends(user, relationList) {
  if (!relationList.has(user)) return [];
  else return [...relationList.get(user)];
}
// 주어진 조건대로 정렬하는 함수
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

function makeFriendsList(friends) {
  const friendsList = new Map();

  friends.forEach(([leftName, rightName]) => {
    if (friendsList.has(leftName))
      friendsList.set(leftName, friendsList.get(leftName).add(rightName));
    else friendsList.set(leftName, new Set([rightName]));

    if (friendsList.has(rightName))
      friendsList.set(rightName, friendsList.get(rightName).add(leftName));
    else friendsList.set(rightName, new Set([leftName]));
  });

  return friendsList;
}

// 친구의 친구가 있는 경우 배열을 반환, 없는 경우 빈 배열을 반환
function getFriendOfFriend({ user, relationList, usersFriends }) {
  const friendsOfFriends = [];

  for (let i = 0; i < usersFriends.length; i++) {
    const friendsSet = relationList.get(usersFriends[i]);

    friendsSet.forEach((friendOfFriend) => {
      if (friendOfFriend !== user && !usersFriends.includes(friendOfFriend)) {
        friendsOfFriends.push(friendOfFriend);
      }
    });
  }

  return friendsOfFriends;
}

// let user = "mrko";
// let friends = [
//   ["donut", "andole"],
//   ["donut", "jun"],
//   ["donut", "mrko"],
//   ["shakevan", "andole"],
//   ["shakevan", "jun"],
//   ["shakevan", "mrko"],
// ];
// let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

// console.log(problem7(user, friends, visitors));

module.exports = problem7;
