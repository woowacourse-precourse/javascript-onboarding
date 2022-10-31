function problem7(user, friends, visitors) {
  //friends에 있는 모든 사람을 대상으로 하는 FriendObj를 생성한다.
  function makeFriendsObj(friends) {
    let friendsObj = {};
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < friends.length; i++) {
        if (!(friends[i][j] in friendsObj)) {
          friendsObj[friends[i][j]] = new Array();
        }
        friendsObj[friends[i][j]].push(friends[i][j == 1 ? 0 : 1]);
      }
    }
    return friendsObj;
  }
  //user에 해당하는 추천 점수를 저장하는 pointObj를 생성한다.
  function makePointObj(user, friendsObj, visitors) {
    let pointObj = {};
    let userFriend = friendsObj[user];
    pointObj = addSameFriendPoint(user, userFriend, friendsObj, pointObj);
    pointObj = addVisitorPoint(friendsObj, user, visitors, pointObj);
    return pointObj;
  }
  //user와 같은 친구를 가진 사람들의 점수를 계산한다.
  function addSameFriendPoint(user, userFriend, friendsObj, pointObj) {
    for (friend of userFriend) {
      for (nearFriend of friendsObj[friend]) {
        if (nearFriend == user) {
          continue;
        } else if (!(nearFriend in pointObj)) {
          pointObj[nearFriend] = 0;
        }
        pointObj[nearFriend] += 10;
      }
    }
    return pointObj;
  }
  //user의 timeline에 방문한 사람들의 점수를 계산한다.
  function addVisitorPoint(friendsObj, user, visitors, pointObj) {
    for (visitor of visitors) {
      if (friendsObj[user].includes(visitor)) {
        continue;
      }
      if (!(visitor in pointObj)) {
        pointObj[visitor] = 0;
      }
      pointObj[visitor] += 1;
    }
    return pointObj;
  }
  //추천 친구와 점수를 저장하는 2차원 배열 result를 생성
  function makeResultArr(pointObj) {
    let result = [];
    for (userName in pointObj) {
      result.push([userName, pointObj[userName]]);
    }
    result = sortWithPoint(result);
    return result;
  }
  //점수에 따라 정렬하고, 추천 점수가 같은 경우 이름 순으로 정렬한다.
  function sortWithPoint(result) {
    result = result.sort(function (prev, cur) {
      if (prev[1] > cur[1]) return -1;
      if (prev[1] < cur[1]) return 1;
      if (prev[0] > cur[0]) return 1;
      if (prev[0] < cur[0]) return -1;
    });
    return result;
  }
  //정답 배열을 생성한다.
  function makeAnswerArr(result, answer) {
    if (result.length < 5) {
      for (userName of result) {
        answer.push(userName[0]);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        answer.push(result[i][0]);
      }
    }
    return answer;
  }

  let answer = [];
  let friendsObj = makeFriendsObj(friends);

  let pointObj = makePointObj(user, friendsObj, visitors);

  let result = makeResultArr(pointObj);

  answer = makeAnswerArr(result, answer);

  return answer;
}

module.exports = problem7;
