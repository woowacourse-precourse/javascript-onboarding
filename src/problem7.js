function problem7(user, friends, visitors) {
  // user의 친구 찾기
  function findUserFriends(user, friends) {
    let friendsList = [];
    for (let friend of friends) {
      if (friend.includes(user)) {
        if (friend[0] !== user) {
          friendsList.push(friend[0]);
        }
        if (friend[1] !== user) {
          friendsList.push(friend[1]);
        }
      }
    }
    return friendsList;
  }

  function recommendFriends(user, friends, visitors, friend) {
    let score = [];

    // user의 친구의 친구를 찾아 10점를 더한다.
    for (let i = 0; i < friends.length; i++) {
      let ff = friends[i];
      for (let j = 0; j < friend.length; j++) {
        // user의 친구의 친구가 user, user의 친구가 아닌 경우만 처리
        if (!ff.includes(user) && ff.includes(friend[j])) {
          let uff = ff.filter(function (f) {
            return f !== friend[j];
          });
          if (uff in score) {
            score[uff] += SCORE_UFF;
          } else {
            score[uff] = SCORE_UFF;
          }
        }
      }
    }

    // 방문자를 찾아 1점을 더한다.
    for (let k = 0; k < visitors.length; k++) {
      let visitor = visitors[k];
      // 방문자가 user, user친구가 아닌 경우만 처리
      if (visitor != user && !friend.includes(visitor)) {
        if (visitor in score) {
          score[visitor] += SCORE_VISITOR;
        } else {
          score[visitor] = SCORE_VISITOR;
        }
      }
    }
    return score;
  }

  let result = [];
  let recommend = [];
  const MAX_RESULT = 5;
  const SCORE_UFF = 10;
  const SCORE_VISITOR = 1;
  let friend = findUserFriends(user, friends);
  let score = recommendFriends(user, friends, visitors, friend);

  for (let [key, value] of Object.entries(score)) {
    recommend.push({ name: key, totalScore: value });
  }

  // 높은 점수 순으로 정렬
  recommend.sort(function (a, b) {
    return a.val != b.val
      ? b.val - a.val // 점수에 대한 내림차순 정렬
      : a.key < b.key
      ? -1 // 점수가 같은 경우 이름에 대한 오름차순 정렬
      : a.key > b.key
      ? 1
      : 0;
  });

  console.log(recommend);
  return result;
}

module.exports = problem7;
