function problem7(user, friends, visitors) {
  const UNFC = UserNotfriendsCheck(user, friends);
  const VC = VisitorCheck(user, friends, visitors);

  // 친구 추천 점수 합계
  for (let i = 0; i < UNFC.length; i++) {
    for (let j = 0; j < VC.length; j++) {
      if (UNFC[i][0] === VC[j][0]) {
        // 공통된 값 더해줌
        UNFC[i][1] = UNFC[i][1] + VC[j][1];
        // 더 해주면 그 값을 삭제
        VC.splice(j, j + 1);
      }
    }
  }
  // 점수에 따른 정렬 및 친구 추천 추출
  const result = [...UNFC, ...VC]
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else if (a[1] === b[1]) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return 1;
        }
      }
    })
    // 최대 5명 추천
    .slice(0, 5)
    .map((v) => v[0]);

  return result;

  // 방문자 배열 중에서 user와 친구가 아닌 사람 추출하기
  function VisitorCheck(user, friends, visitors) {
    // user와 친구인 사람 추출하기
    let check = UserFriendsCheck(user, friends);
    // user와 친구가 아닌 사람 추출
    let usernotfriendsvisitors = visitors.filter(
      (visititor) => !check.includes(visititor)
    );
    // 추출된 방문자 당 + 1 부여하고 객체를 배열로 전환
    return Object.entries(
      usernotfriendsvisitors.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {})
    );
  }

  // user와 친구인 사람 중에서 연관된 친구 추출하기
  function UserNotfriendsCheck(user, friends) {
    // user와 친구인 사람 추출하기
    let check = UserFriendsCheck(user, friends);
    // 연관된 친구 추출하기
    let usernotfriends = [];
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < check.length; j++) {
        if (friends[i].includes(check[j]) && !friends[i].includes(user)) {
          usernotfriends.push(
            friends[i].find((user) => !user.includes(check[j]))
          );
        }
      }
    }
    // 추출된 친구들 당 + 10 부여하고 객체를 배열로 변환
    return Object.entries(
      usernotfriends.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 10;
        return prev;
      }, {})
    );
  }

  // user와 친구인 사람 추출하기
  function UserFriendsCheck(user, friends) {
    let userfriends = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(user)) {
        userfriends.push(friends[i].find((friends) => friends !== user));
      }
    }
    return userfriends;
  }
}

module.exports = problem7;
