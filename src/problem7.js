function problem7(user, friends, visitor) {
  // 추천친구 점수 계산 현황판
  const scoreBoard = {};

  // 현재 나의 친구목록
  let myFriend = [];
  for (let i of friends) {
    if (i.includes(user)) {
      myFriend.push(i);
    } else {
      scoreBoard[i[1]] = 0;
    }
    myFriend = myFriend.flat().filter((v) => v !== user);
  }

  // 방문한 친구에게 +1 점
  for (let i of visitor) {
    if (!myFriend.includes(i)) {
      scoreBoard[i] ? (scoreBoard[i] += 1) : (scoreBoard[i] = 1);
    }
  }

  // 추천 할 친구 후보들 목록
  const recommendFriends = Object.keys(scoreBoard);

  // 내 친구의 친구에게 +10점
  for (let i of friends) {
    for (let j = 0; j < myFriend.length; j++) {
      for (let k = 0; k < recommendFriends.length; k++) {
        if (i[0] === myFriend[j] && i[1] === recommendFriends[k]) {
          scoreBoard[recommendFriends[k]] += 10;
        }
      }
    }
  }

  // 후보 목록을 추천 규칙에따라 정렬 (점수순 > 이름순)
  recommendFriends.sort().sort((a, b) => {
    return scoreBoard[b] - scoreBoard[a];
  });

  // 후보 목록 중 최대 5명 리턴
  const result = recommendFriends.filter((v, i) => i < 5);
  return result;
}

module.exports = problem7;
