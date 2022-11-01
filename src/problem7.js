function problem7(user, friends, visitors) {
  let answer = [];
  let result = [];
  let map = new Map();

  // friens 확인
  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let a of friend) {
        // 함께 아는 친구 10점
        map.set(a, 10);
      }
    } else {
      for (let a of friend) {
        // 원래 친구 0점
        map.set(a, 0);
      }
    }
  }
  // console.log(map);

  // visitors 확인
  for (let visitor of visitors) {
    // 신규 친구 = map 에 없으면 1점
    if (!map.has(visitor)) {
      map.set(visitor, 1);
    } else if (map.get(visitor) !== 0) {
      // 0점이 아니고 점수가 있다면 1점 추가
      map.set(visitor, map.get(visitor) + 1);
    }
  }
  // 점수 기준 내림차순
  result = [...map].sort((r1, r2) => r2[1] - r1[1]);

  // 0점이 아닌 것만 추출
  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === 0) {
      continue;
    } else {
      answer.push(result[i][0]);
    }
  }
  // console.log(result);
  // console.log(map);
  // console.log(answer);

  return answer;
}

module.exports = problem7;
