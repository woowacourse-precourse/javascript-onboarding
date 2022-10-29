/*
[x] 전체 유저의 친구 관계를 구하는 기능을 구현한다.
[ ] 유저에 대해서 친구 추천을 하는 기능을 구현한다.
[ ] 정렬하여 결과를 반환한다.
*/

function makeUserRelation(friends) {
  const userRelation = {};
  for (const [personA, personB] of friends) {
    if (!userRelation[personA]) {
      userRelation[personA] = new Set();
    }
    if (!userRelation[personB]) {
      userRelation[personB] = new Set();
    }
    userRelation[personA].add(personB);
    userRelation[personB].add(personA);
  }
  return userRelation;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
