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

  function recommendFriends(user, friends, friend) {
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

    return score;
  }

  let result = [];
  let recommend = [];
  const MAX_RESULT = 5;
  const SCORE_UFF = 10;
  const SCORE_VISITOR = 1;
  let friend = findUserFriends(user, friends);
  let score = recommendFriends(user, friends, friend);

  console.log(score);

  return result;
}

module.exports = problem7;
