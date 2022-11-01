function problem7(user, friends, visitors) {
  let answer = [];
  let point = {};

  for (const relation of friends) {
    if (!relation.includes(user)) {
      for (const friend of relation) {
        point[friend] = 10;
      }
    } else {
      // 사용자와 사용자의 일촌관계
      for (const friend of relation) {
        point[friend] = -1;
      }
    }
  }

  for (const visitor of visitors) {
    if (!point[visitor]) point[visitor] = 1;
    else if (point[visitor] > 0) {
      point[visitor]++;
    }
  }

  let res = [];
  for (const [name, score] of Object.entries(point)) {
    if (score > 0) res.push([name, score]);
  }

  // 점수 높은 순으로 우선 정렬 만약 점수가 같다면 이름순
  res = res.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return a[1] < b[1] ? 1 : -1;
  });

  res.forEach((v) => answer.push(v[0]));
  return answer;
}

module.exports = problem7;
