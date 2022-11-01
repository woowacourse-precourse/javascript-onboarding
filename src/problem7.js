function problem7(user, friends, visitors) {
  var answer = [];

  // 함께 아는 친구 점수
  let friendsCount = {};
  // 방문 점수
  let visitCount = {};
  // 총 점수
  let totalCount = {};

  // 모든 사람을 담은 배열에서 user를 삭제해줌
  const friendsArr = friends.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  let notUser = friendsArr.concat(visitors);
  let set = new Set(notUser);
  notUser = [...set];

  notUser.splice(notUser.indexOf(user), 1);

  // 이미 친구인 사람들 배열
  const except = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      except.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      except.push(friends[i][0]);
    }
  }

  // user를 뺀 배열에서 user와 친구인 사람들을 삭제
  // user와 친구가 아닌 사람들만 남김
  notUser.forEach((ele, i) => {
    if (except.includes(ele)) {
      notUser.splice(i, 1);
      i++;
    }
  });

  // 배열 초기화
  notUser.forEach((ele) => {
    friendsCount[ele] = 0;
    visitCount[ele] = 0;
  });

  // 방문 점수 계산
  visitors.forEach((visitor, i) => {
    visitCount[visitor] += 1;
  });

  // 함께 아는 친구 점수 계산
  for (let i = 0; i < friends.length; i++) {
    if (except.includes(friends[i][0]) && notUser.includes(friends[i][1])) {
      friendsCount[friends[i][1]] = friendsCount[friends[i][1]] + 1;
    } else if (
      except.includes(friends[i][1]) &&
      notUser.includes(friends[i][0])
    ) {
      friendsCount[friends[i][0]] = friendsCount[friends[i][0]] + 1;
    }
  }

  // 총 점수 계산
  notUser.forEach((i) => (totalCount[i] = 0));
  notUser.forEach((ele) => {
    totalCount[ele] =
      parseInt(friendsCount[ele]) * 10 + parseInt(visitCount[ele]) * 1;
  });

  // 점수 순으로 sort
  let sorted = Object.entries(totalCount).sort((a, b) => {
    b[1] - a[1];
  });

  // 점수가 같을 경우 알파벳순으로 sort
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] == sorted[i + 1][1]) {
      if (sorted[i][0] > sorted[i + 1][0]) {
        let tmp = sorted[i + 1];
        sorted[i + 1] = sorted[i];
        sorted[i] = tmp;
      }
    }
  }

  sorted.forEach((i) => answer.push(i[0]));
  return answer;
}

module.exports = problem7;
