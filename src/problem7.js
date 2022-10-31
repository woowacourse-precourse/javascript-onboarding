function makeRecommendScoreObj(user, friends) {
  const temp = {};
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i][j] !== user) {
        temp[friends[i][j]] = 0;
      }
    }
  }
  return temp;
}

function userFriendList(user, friends) {
  const userFriend = [];

  for (let i = 0; i < friends.length; i++) {
    let idx = friends[i].indexOf(user);
    if (idx !== -1) {
      userFriend.push(friends[i][1 - idx]);
    }
  }

  return userFriend;
}

function recommendScoreCalc(
  user,
  friends,
  recommendScore,
  userFriend,
  visitors
) {
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i][j] === user) {
        continue;
      }

      if (userFriend.indexOf(friends[i][1 - j]) !== -1) {
        recommendScore[friends[i][j]] += 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (!(visitors[i] in recommendScore)) recommendScore[visitors[i]] = 1;
    else recommendScore[visitors[i]] += 1;
  }
}

function compareScoreFunc(a, b) {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else if (a[1] === b[1]) {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
  }
}

function makeRecommendFriendList(recommendScore, userFriend) {
  for (const k in recommendScore) {
    // 계산된 친구 추천 점수에서 유저의 친구 목록에 있는 이름이거나 점수가 0점이면 제거
    if (userFriend.indexOf(k) !== -1 || recommendScore[k] === 0) {
      delete recommendScore[k];
    }
  }

  const recommendList = Object.entries(recommendScore);
  // 조건에 맞게 추천 목록을 정렬
  recommendList.sort(compareScoreFunc);
  // 최대 5명 반환
  return recommendList.map((ele) => ele[0]).slice(0, 6);
}

function problem7(user, friends, visitors) {
  var answer;

  ///////////// 추천 점수 객체 생성 /////////////////////
  const recommendScore = makeRecommendScoreObj(user, friends);

  //////////////// 유저 친구 목록 ////////////////////
  const userFriend = userFriendList(user, friends);

  ////////////////////// 추천 점수 계산 ////////////////////
  recommendScoreCalc(user, friends, recommendScore, userFriend, visitors);

  ///////////////// 추천 필터 및 정렬////////////////////////////
  answer = makeRecommendFriendList(recommendScore, userFriend);

  return answer;
}

module.exports = problem7;
