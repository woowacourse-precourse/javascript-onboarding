// 기능 목록
// 1 친구목록, 방문자 중복 없이 map 형태로 저장 (점수를 위한 map)
// 2. 친구 관계를 map 형태로 저장한다.
// 3. user 와 친구인 친구들에게 10점씩 부여한다.
// 4. 방문자에게 1점씩 부여한다
// 5. 점수순 최대 5명 리턴 -> 점수 0 제외 -> 동일한 점수 이름순 정렬

function problem7(user, friends, visitors) {
  let answer;

  let recommend_points = new Map();
  let fridens_relation = new Map();

  for (const [a, b] of friends) {
    if (!recommend_points.has(a)) recommend_points.set(a, 0);
    if (!recommend_points.has(b)) recommend_points.set(b, 0);
  }
  for (const a of visitors) {
    if (!recommend_points.has(a)) recommend_points.set(a, 0);
  }

  for (const [a, b] of friends) {
    if (!fridens_relation.has(a)) fridens_relation.set(a, [b]);
    else fridens_relation.set(a, [...fridens_relation.get(a), b]);

    if (!fridens_relation.has(b)) fridens_relation.set(b, [a]);
    else fridens_relation.set(b, [...fridens_relation.get(b), a]);
  }

  console.log(fridens_relation);

  return answer;
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);
module.exports = problem7;
