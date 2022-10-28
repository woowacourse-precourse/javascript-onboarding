function problem7(user, friends, visitors) {
  const recommandFreind = {};

  const [myFriends, friendFriends] = filteredFreinds(user, friends);
  console.log(friendFriends);

  const friendObj = friendsRecomandList(user, friendFriends, friends);

  const visitObj = visiterRecomandList(visitors);

  scoreSortRecomandFreinds(friendObj, visitObj, myFriends);

  return friendObj;
}

// 1. USER 의 친구를 거르는 기능
function filteredFreinds(user, friends) {
  const myFriends = [];
  const friendFriends = friends.filter((t) => {
    return t.includes(user);
  });
  friendFriends.map((f) => myFriends.push(f[0]));
  return [myFriends, friendFriends];
}

// 2. 친구의 친구를 구하는 기능
function friendsRecomandList(me, myFreinds, friends) {
  const friendObj = {};

  myFreinds.map((id) => {
    const [, friendsFriends] = filteredFreinds(id[0], friends);
    friendsFriends.map((f) => {
      if (f[1] !== me) {
        if (!friendObj.hasOwnProperty(f[1])) {
          friendObj[f[1]] = 1;
        } else {
          friendObj[f[1]] += 1;
        }
      }
    });
  });

  return friendObj;
}

// 3. VISITOR의 카운트를 세서 점수 계산하는 기능
function visiterRecomandList(visitors) {
  const visitObj = {};
  visitors.map((v) => {
    if (!visitObj.hasOwnProperty(v)) {
      visitObj[v] = 1;
    } else {
      visitObj[v] += 1;
    }
  });
  return visitObj;
}

// 4. 점수가 가장 높은 순으로 정렬,친구 추천 기능
function scoreSortRecomandFreinds(friends, visiters, myF) {
  const result = {};
  //점수 규칙1 아는 사람의 친구 : 10점
  for (const friend in friends) {
    result[friend] = friends[friend] * 10;
  }
  //점수 규칙 2 방문 횟수 : 1점
  for (const visiter in visiters) {
    if (myF.includes(visiter)) continue;
    if (result.hasOwnProperty(visiter)) {
      result[visiter] += visiters[visiter] * 1;
    } else {
      result[visiter] = visiters[visiter] * 1;
    }
  }
  console.log(result);
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
