function problem7(user, friends, visitors) {
  const fdobj = {};
  var answer = [];
  let answerCnt = 0;

  //사용자 객체 생성
  fdobj[user] = [[], 0];

  //친구 관계 생성 및 저장.
  function SaveF(friend1, friend2) {
    if (friend1 in fdobj) {
      fdobj[friend1][0].push(friend2);
    } else {
      fdobj[friend1] = [[], 0];
      fdobj[friend1][0].push(friend2);
    }
  }

  friends.forEach((element) => {
    SaveF(element[0], element[1]);
    SaveF(element[1], element[0]);
  });

  // 친구를 담는 Set 생성(중복제거)
  const userFriendsSet = new Set(fdobj[user][0]);

  // 겹치는 친구 수 판별 및 점수부여
  for (const key in fdobj) {
    if (key === user) {
      continue;
    }
    fdobj[key][0].forEach((element) => {
      if (userFriendsSet.has(element)) {
        fdobj[key][1] += 10;
      }
    });
  }
  // 방문한 횟수 합산 및 점수부여
  visitors.forEach((element) => {
    if (element in fdobj) {
      fdobj[element][1] += 1;
    } else {
      fdobj[element] = [[], 1];
    }
  });
  // 점수가 0을 초과하는 사용자를 담은 배열 생성 및 내림차순 정렬
  const nMate = [];
  for (x in fdobj) {
    if (fdobj[x][1] > 0) {
      nMate.push([x, fdobj[x][1]]);
    }
  }
  nMate.sort((a, b) => {
    if (b[1] > a[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else if (a[0] > b[0]) return 1;
    else if (b[0] > a[0]) return -1;
  });

  // 최대 5명까지 출력하게 구현
  for (let i = 0; i < nMate.length; i++) {
    if (answerCnt === 5) break;
    if (userFriendsSet.has(nMate[i][0])) continue;
    answer.push(nMate[i][0]);
    answerCnt += 1;
  }
}

module.exports = problem7;
