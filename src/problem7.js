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
  // 기본 내림차순
  // 점수가 같다면 오름차순
  // 최대 5개를 추출하고 0점 제외 유저 제외
  res = res.sort((a, b) => b[1] - a[1]);
  res.forEach((v) => answer.push(v[0]));
  return answer;
}

const arr = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
const visit = ["bedi", "bedi", "donut", "bedi", "shakevan"];
// console.log(problem7("mrko", arr, visit));
module.exports = problem7;
