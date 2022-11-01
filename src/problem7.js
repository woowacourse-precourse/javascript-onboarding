/*
  기능 목록
  1. 주어진 친구관계를 이용해, 친구관계를 나타내는 Object를 만든다.
  2. 친구관계를 나타내는 Object를 이용해, 친구의 친구를 찾아 점수를 부여한다.
  3. 방문기록을 이용해, 점수를 부여한다.
  4. 점수를 이용해, 추천 친구를 찾는다. 이 때, 0점인 친구는 제외한다.

 */
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function makeRelation(friends) {
  // 1번 구현
  const relation = {};
  for (let i = 0; i < friends.length; i++) {
    const [name1, name2] = friends[i];
    relation[name1]
      ? relation[name1].push(name2) // 이미 존재하는 경우
      : (relation[name1] = name2); // 새로운 경우
    relation[name2]
      ? relation[name2].push(name1) // 이미 존재하는 경우
      : (relation[name2] = name1); // 새로운 경우
  }
  return relation;
}

module.exports = problem7;
