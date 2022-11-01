// 1. sns 회원 리스트화
// 2. 친구지도 (obj) 생성
// 3. 방문자 point 계산
// 4. 서로 아는 친구 Point 계산
// 5. 이미 user 와 친구인 사람 map에서 제거
// 6. sort및 랭킹 생성

// 회원 리스트화
function findPeople(friends) {
  let people = [];
  friends.forEach((data) => people.push(...data));
  people = [...new Set(people)];
  return people;
}
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
