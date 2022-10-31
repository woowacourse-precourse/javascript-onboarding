function problem7(user, friends, visitor) {
  // 추천친구 점수 계산 현황판
  const scoreBoard = {};

  // 현재 나의 친구목록
  let myFriend = [];
  for (let arr of friends) {
    if (arr.includes(user)) {
      myFriend.push(arr);
    } else {
      scoreBoard[arr[1]] = 0;
    }
    myFriend = myFriend.flat().filter((v) => v !== user);
  }

  // 방문한 친구에게 +1 점
  for (let name of visitor) {
    if (!myFriend.includes(name)) {
      scoreBoard[name] ? (scoreBoard[name] += 1) : (scoreBoard[name] = 1);
    }
  }

  // 추천 할 친구 후보들 목록
  const recommendFriends = Object.keys(scoreBoard);

  // 내 친구의 친구에게 +10점
  for (let showRelationship of friends) {
    const [nameOfMyFriend, friendOfAFriend] = showRelationship;
    for (let j = 0; j < myFriend.length; j++) {
      for (let k = 0; k < recommendFriends.length; k++) {
        if (
          nameOfMyFriend === myFriend[j] &&
          friendOfAFriend === recommendFriends[k]
        ) {
          scoreBoard[recommendFriends[k]] += 10;
        }
      }
    }
  }

  // 추천후보 목록을 추천 규칙에따라 정렬 (점수순 > 이름순)
  recommendFriends.sort().sort((a, b) => {
    return scoreBoard[b] - scoreBoard[a];
  });

  // 추천후보 목록 중 점수가 0인 이름은 제외 후,
  const result = recommendFriends.filter((v, i) => {
    if (scoreBoard[v] !== 0) return v;
  });
  // 최대 5명만 리턴
  return result.splice(0, 5);
}

module.exports = problem7;
