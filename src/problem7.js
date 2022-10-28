function problem7(user, friends, visitors) {
  var answer = [];

  const visitorList = {}; // 방문자 객체 리스트
  // 방문자 객체로 만들고 점수 부여하기
  visitors.forEach((visitor) => {
    if (visitorList[visitor] === undefined) {
      visitorList[visitor] = 1;
    } else {
      visitorList[visitor]++;
    }
  });

  const visitorScoreList = [];

  // 방문자 점수 오브젝트를 오브젝트 배열로 만들기 (정렬해야해서)
  for (let id in visitorList) {
    visitorScoreList.push({
      name: id,
      score: visitorList[id],
    });
  }

  const userFriend = [];
  // 유저랑 친구 되어있는 사람 찾기
  friends.forEach((friend) => {
    if (friend[0] === user) {
      userFriend.push(friend[1]);
    } else if (friend[1] === user) {
      userFriend.push(friend[0]);
    }
  });

  const recommendFriendList = {}; // 추천 친구 리스트 점수 부여
  // 관련 친구 점수 부여하기
  friends.forEach((friend) => {
    const [A, B] = friend;

    if (userFriend.includes(A) && !recommendFriendList[B] && B !== user) {
      recommendFriendList[B] = 10;
    } else if (
      userFriend.includes(B) &&
      !recommendFriendList[A] &&
      A !== user
    ) {
      recommendFriendList[A] = 10;
    } else if (recommendFriendList[A]) {
      recommendFriendList[A] += 10;
    } else if (recommendFriendList[B]) {
      recommendFriendList[B] += 10;
    }
  });

  const recommendFriendScoreList = [];
  for (let id in recommendFriendList) {
    recommendFriendScoreList.push({
      name: id,
      score: recommendFriendList[id],
    });
  }

  const totalList = [...visitorScoreList, ...recommendFriendScoreList];
  totalList.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    } else if (b.score > a.score) {
      return 1;
    } else if (a.score === b.score) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
    }
    return 0;
  });

  // 이미 친구인 유저 제외하기
  const filterUserList = totalList.filter((user) => {
    return !userFriend.includes(user.name);
  });

  for (let i = 0; i < filterUserList.length; i++) {
    if (answer.length >= 5) break;
    answer.push(totalList[i].name);
  }

  return answer;
}

module.exports = problem7;
