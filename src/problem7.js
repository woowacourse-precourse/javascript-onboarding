// 기능 목록
// 1. user의 친구 구하기
// 2. user의 친구의 친구 구하기 => 각 10점씩
// 3. visitors 배열의 요소 => 각 1점씩 (단, user의 친구는 0점)
// 4. 3을 점수 높은 순으로 정렬하기
// 5. 단, 동점을 경우 이름순으로 정렬하기
// 6. answer는 최대 5명

function problem7(user, friends, visitors) {
  // 점수가 높은 순으로 최대 5명 정렬
  let answer = [];
  // 유저의 친구
  let userFriends = [];

  // user의 친구 구하기
  friends
    .filter((el) => el.includes(user))
    .filter((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i] !== user) userFriends.push(el[i]);
      }
    });

  return answer;
}

module.exports = problem7;
