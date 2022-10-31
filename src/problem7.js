// set의 교집합을 구하는 함수 구현
// 친구관계 객체를 만드는 함수 구현
// 친구별 추천점수를 계산하는 함수 구현
// 이미 친구인 유저를 목록에서 삭제하는 함수 구현
// 결과 객체를 정렬하고, 5개까지만 나오도록 잘라주는 함수 구현

function setIntersection(set1, set2) {
  const result = new Set();

  for (const value of set1) {
    if (set2.has(value)) result.add(value);
  }

  return result;
}

function makeRelations(friends, relations) {
  friends.forEach((element) => {
    if (relations[element[0]] === undefined) {
      relations[element[0]] = new Set();
    }
    if (relations[element[1]] === undefined) {
      relations[element[1]] = new Set();
    }
    relations[element[1]].add(element[0]);
    relations[element[0]].add(element[1]);
  });
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
