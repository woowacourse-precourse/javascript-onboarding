// 먼저 친구와 일촌을 맺고, 친구의 친구를 추가하고,방문자들을 추가한다 -> 접근방식은 문자열이 추가되어 있는지 추가되어 있지 않은지 확인하는 방식으로
// -> mdn에서 발견한 include 사용
// total은 1촌,친친구,방문자 -> set사용
//bedi는 친구가 아니라 방문자라서 10점 더해주면 안된다
// 방문자 중복이 되면 안된다 [a,b] = [b,a](x) -> 방문자는 1점 더해주는거 넣기, 테스트 결과값에 나와있는 방문자 수는 5개
function problem7(user, friends, visitors) {
  let ilchon = [];
  let total = new Set([]);
  let answer = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      ilchon.push(friends[i][0]);
    }

    total.add(friends[i][0]);
    total.add(friends[i][1]);
  }

  for (let i = 0; i < visitors.length; i++) {
    total.add(visitors[i]);
  }
  total_list = [...total];
  let score = {};
  for (let i = 0; i < total_list.length; i++) {
    score[total_list[i]] = 0;
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1].includes("andole")) {
      score[friends[i][1]] += 10;
    }
    if (friends[i][1].includes("jun")) {
      score[friends[i][1]] += 10;
    }
  }

  for (let i = 0; i <= visitors.length; i++) {
    if (visitors[i] === total_list[5]) score[visitors[i]] += 1;
  }

  for (let top in score) {
    answer.push([top, score[top]]);
  }
  answer.sort((first, second) => second[1] - first[1]);

  answer = answer.slice(0, 3).map((final) => final[0]);
  return answer;
}

module.exports = problem7;
