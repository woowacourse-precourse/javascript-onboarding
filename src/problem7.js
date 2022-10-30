// 함께아는 친구의 배열을 return하는 함수 findAcquaintances
function findAcquaintances(user, friends) {
  const userFriends = [];
  // user와 친구 관계인 사람을 userFriends 배열에 담음.
  friends.map((m) => {
    if (m.includes(user)) {
      userFriends.push(...m.filter((a) => a !== user));
    }
  });
  let arr = [...userFriends];
  let flag = false;
  // userFriends에 있는 사람과 친구 관계인 사람을 arr 배열에 담음.
  while (true) {
    flag = false;
    arr.map((m) => {
      friends.map((relation, index) => {
        if (relation.includes(m)) {
          arr.push(...relation.filter((a) => a !== m));
          friends.splice(index, 1);
          flag = true;
        }
      });
    });
    if (!flag) break;
  }
  // arr배열에서 user와 user의 친구를 제외한 배열 arr를 return한다.
  arr = arr.filter((i) => i !== user).filter((i) => !userFriends.includes(i));
  return arr;
}

function problem7(user, friends, visitors) {
  let answer = [];
  // user와 함께 아는 친구 관계인 배열 acquaintances.
  const acquaintances = findAcquaintances(user, friends);
  let map = new Map();
  // Map 객체에 key로 유저이름, value로 사용자와 함께 아는 친구의 수 점수를 계산. (10점)
  acquaintances.map((m) => {
    if (map.has(m)) {
      map.set(m, map.get(m) + 10);
    } else {
      map.set(m, 10);
    }
  });
  // Map 객체에 key로 유저이름, value로 사용자의 타임 라인에 방문한 횟수 점수를 계산. (1점)
  visitors.map((m) => {
    if (map.has(m)) {
      map.set(m, map.get(m) + 1);
    } else {
      map.set(m, 1);
    }
  });
  // Map객체를 배열로 변환하고 value를 기준으로 내림차순 정렬
  map = [...map.entries()].sort((a, b) => b[1] - a[1]);
  //
  // map 배열에서 상위 3명의 이름을 반환
  for (let i = 0; i < 3; i++) {
    answer.push(map[i][0]);
  }
  return answer;
}

module.exports = problem7;
