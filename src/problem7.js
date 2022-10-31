function problem7(user, friends, visitors) {
  let answer = [];
  for (let i in friends) {
    if (answer.findIndex((x) => x[0] === friends[i][0]) === -1)
      answer.push([friends[i][0], 0]);
    if (answer.findIndex((x) => x[0] === friends[i][1]) === -1)
      answer.push([friends[i][1], 0]);
  }
  for (let i in visitors)
    if (answer.findIndex((x) => x[0] === visitors[i]) === -1)
      answer.push([visitors[i], 1]);
    else answer[answer.findIndex((x) => x[0] === visitors[i])][1]++;
  let len = answer.length;
  let orig = answer.findIndex((x) => x[0] === user);
  let map = [];
  for (let i = 0; i < len; i++) map.push(Array(len).fill(0));
  for (let i in friends) {
    let a = answer.findIndex((x) => x[0] === friends[i][0]);
    let b = answer.findIndex((x) => x[0] === friends[i][1]);
    map[a][b] = 1;
    map[b][a] = 1;
  }
  answer[orig][1] = -Infinity;
  for (let i = 0; i < len; i++) {
    if (map[orig][i] === 1) {
      answer[i][1] = -Infinity;
      for (let j = 0; j < len; j++) if (map[i][j] === 1) answer[j][1] += 10;
    }
  }
  answer.sort((a, b) => (b[1] > a[1] ? a[0] - b[0] : b[1] - a[1]));
  return answer.filter((x) => x[1] > 0).map((x) => x[0]).slice(0, 5);
}
// slack 테스트 케이스 출력 
console.log((problem7(
  "andole",
  [
    ["andole", 'jun'], ["donut", "jun"], ["donut", "shakevan"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "bedi"], ["anne", "jun"]
  ],
  ["donut", "mrko", "peter", "sam"]
)))
/*"donut", "anne", "bedi", "mrko", "peter"]
 donut = 21, anne = 10, bedi = 10, mrko = 1, peter = 1, sam = 1
Solution은 최대 5명을 return하기 때문에 sam도 1점이지만 리턴되지 않습니다. */
module.exports = problem7;
