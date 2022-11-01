function problem7(user, friends, visitors) {
  var answer;
  answer = recommendFriends(user, friends, visitors);
  return answer;
}

function recommendFriends(user, friends, visitors) {
  // friendsList 중 user 와 진짜 친구인 인원만 array 에 담아서 선별한다.
  const score = {};
  const userRealFriends = [];
  const recommendation = [];
  let stack;

  visitors.forEach((v) => {
    score[v] = (score[v] || 0) + 1;
  });

  for (let userFriend of friends) {
    if (userFriend[0] === user) userRealFriends.push(userFriend[1]);
    if (userFriend[1] === user) userRealFriends.push(userFriend[0]);
  }

  // user의 진짜 친구를 선별하여 친구의 친구라면 +10기록

  userRealFriends.map((realFriend) => {
    friends.map((friendList) => {
      if (friendList[0] === realFriend)
        friendList.forEach((v) => {
          score[v] = (score[v] || 0) + 10;
        });
      else if (friendList[1] === realFriend)
        friendList.forEach((v) => {
          score[v] = (score[v] || 0) + 10;
        });
    });
    delete score[realFriend];
  });

  //유저 본인과 유저의 친구 score에서 제거

  delete score[user];

  // 먼저 abc순의 정렬 후 점수별로 정렬

  stack = Object.entries(score)
    .sort()
    .sort(([, a], [, b]) => b - a);
  stack.map((v) => {
    recommendation.push(v[0]);
  });

  return recommendation.splice(0, 5);
}

module.exports = problem7;
