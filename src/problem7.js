function problem7(user, friends, visitors) {
  const [myFriends, friendFriends] = filteredFreinds(user, friends);

  const friendObj = friendsRecomandList(user, friendFriends, friends);

  const visitObj = visiterRecomandList(visitors);

  const result = scoreSortRecomandFreinds(friendObj, visitObj, myFriends);

  return resultSorting(result);
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
  return result;
}

//기능 5.결과 객체를 점수 순서로 정렬 후 5명 까지만 만들기
function resultSorting(result) {
  const test = Object.entries(result).sort(([a, b], [c, d]) => {
    if (b === d) {
      if (a > c) return 1;
      else if (a < c) return -1;
      else return 0;
    } else {
      return d - b;
    }
  });
  const list = [];

  for (let i = 0; i < (test.length <= 5 ? test.length : 5); i++) {
    list.push(test[i][0]);
  }

  return list;
}

module.exports = problem7;
