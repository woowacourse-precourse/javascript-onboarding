/* 
  기능 목록
  1. user와 친구인 아이디 배열에 담기
  2. visitor를 돌며 1점씩 추가
  3. user와 친구인 아이디의 친구들을 돌며 10점씩 추가
  4. 주어진 점수 표에서 이미 친구인 아이디는 제외
  5. 친구 목록을 높은 점수 순으로 정렬, 점수가 같다면 이름순으로 정렬
*/

function friendCheck(friendsArray, id) {
  return friendsArray
    .filter((element) => element.includes(id))
    .map((element) => {
      if (element[0] === id) return element[1];
      else return element[0];
    });
}

function problem7(user, friends, visitors) {
  const friendArray = friendCheck(friends, user);

  var answer;
  return answer;
}

module.exports = problem7;
