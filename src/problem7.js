function problem7(user, friends, visitors) {
  const UNFC = UserNotfriendsCheck(user, friends); //[ 'andole', 20 ], [ 'jun', 20 ]
  const VC = visitorCheck(user, friends, visitors); //[ 'bedi', 3 ], [ 'andole', 2 ]

  // 친구 추천 점수 합계
  for (let i = 0; i < UNFC.length; i++) {
    for (let j = 0; j < VC.length; j++) {
      if (UNFC[i][0] === VC[j][0]) {
        // 공통된 값 더해줌
        UNFC[i][1] = UNFC[i][1] + VC[j][1];
        // 더 해주면 삭제 그값을 삭제
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
    .slice(0, 5)
    .map((v) => v[0]);

  return result;

  //[ 'bedi', 'bedi', 'bedi' ]
  // 방문자배열 중에서 user와 친구가 아닌 사람 추출하기
  function visitorCheck(user, friends, visitors) {
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

  // [ 'andole', 'jun', 'andole', 'jun' ]
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
  // [ 'donut', 'shakevan' ]
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
// console.log(problem7(user, friends, visitors));

module.exports = problem7;

// 1. 사용자와 친구인 이름 추출 => donut,shakevan
// 2. 사용자와 친구인 사람 중에서 다른 사람이 나랑 친구이지 않으면 10점
// 3. 방문자 중에서 나랑 친구이면 제외, 아니면 +1점
// 4. 이름이 같으면 점수가 많은 순부터 내림차순
// .sort((a, b) => {
//       if (a[1] > b[1]) {
//         return -1;
//       } else if (a[1] < b[1]) {
//         return 1;
//       } else if (a[1] == b[1]) {
//         if (a[0] < b[0]) {
//           return -1;
//         } else if (a[0] > b[0]) {
//           return 1;
//         }
//       }
//     })
//     .slice(0, 5);

// function UserFriendsCheck(user, friends) {
//   let userfriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].includes(user)) {
//       userfriends.push(...friends[i]);
//     }
//   }
//   return userfriends
//     .map((v) => (v !== user ? v : ""))
//     .filter((v) => v !== "");
// }

// function UserFriendsCheck(user, friends) {
//   let userfriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].includes(user)) {
//       userfriends.push(friends[i].find((friends) => friends !== user));
//     }
//   }
//   return userfriends;
// }

// result.reduce((prev, cur) => {
//   prev[cur] = (prev[cur] || 0) + 1;
//   return prev;
// }, []);

//[ 'andole', 'jun', 'andole', 'jun' ]
// return usernotfriends.reduce((prev, cur) => {
//   prev[cur] = (prev[cur] || 0) + 10;
//   return prev;
// }, []);
// // { andole: 20, jun: 20 }
