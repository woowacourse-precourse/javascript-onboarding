// 기능 목록
// 1 친구목록, 방문자 중복 없이 map 형태로 저장 (점수를 위한 map)
// 2. 친구 관계를 map 형태로 저장한다.
// 3. user 와 친구인 친구들에게 10점씩 부여한다.
// 4. 방문자에게 1점씩 부여한다
// 5. user, user 친구는 제외한다.
// 6. 점수순 최대 5명 리턴 -> 점수 0 제외 -> 동일한 점수 이름순 정렬

function problem7(user, friends, visitors) {
  let answer = [];
  let result;

  let recommend_points = new Map();
  let fridens_relation = new Map();

  // 1 친구목록, 방문자 중복 없이 map 형태로 저장 (점수를 위한 map)
  for (const [a, b] of friends) {
    if (!recommend_points.has(a)) recommend_points.set(a, 0);
    if (!recommend_points.has(b)) recommend_points.set(b, 0);
  }
  for (const a of visitors) {
    if (!recommend_points.has(a)) recommend_points.set(a, 0);
  }

  // 2. 친구 관계를 map 형태로 저장한다.
  for (const [a, b] of friends) {
    if (!fridens_relation.has(a)) fridens_relation.set(a, [b]);
    else fridens_relation.set(a, [...fridens_relation.get(a), b]);

    if (!fridens_relation.has(b)) fridens_relation.set(b, [a]);
    else fridens_relation.set(b, [...fridens_relation.get(b), a]);
  }

  // user 와 친구인 친구들에게 10점씩 부여한다.
  for (const i of fridens_relation.get(user)) {
    for (const j of fridens_relation.get(i)) {
      recommend_points.set(j, recommend_points.get(j) + 10);
    }
  }

  // 방문자에게 1점씩 부여한다.
  for (const i of visitors) {
    recommend_points.set(i, recommend_points.get(i) + 1);
  }

  // user, user 친구는 제외한다.
  for (const i of [...fridens_relation.get(user), user]) {
    recommend_points.delete(i);
  }

  // 점수순 최대 5명 리턴 -> 점수 0 제외 -> 동일한 점수 이름순 정렬
  result = Array.from(recommend_points);
  result.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) return a[0] - b[0];
  });

  for (const [name, score] of result) {
    if (answer.length > 5) break;
    if (score !== 0) answer.push(name);
  }

  return answer;
}

module.exports = problem7;
