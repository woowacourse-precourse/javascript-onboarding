// 기능목록
// 1. user의 친구목록 배열 생성
// 2. user의 친구목록원소들과 겹치는 친구가 있는 사용자들을 탐색
// 3. 탐색된 사용자들을 +10
// 3. visitors중 친구목록원소와 비교하여 친구들은 제외
// 4. visitors의 해당 사용자 횟수만큼 +1
// 5. 완성된 score객체를 배열로 변환 및 점수-이름 순으로 정렬
// 6. 상위 5개의 id와점수 배열 자르기 및 id만 answer에 저장

// 해당 user의 친구목록 반환 함수
function getFriendsArr(user, friends) {
  const userFriends2D = friends.filter((idArr) => idArr.includes(user));
  const 해당유저정보삭제한userFriends2D = userFriends2D.map((idArr) =>
    idArr.filter((id) => id !== user)
  );
  const user의_친구목록 = Arr2Dto1D(해당유저정보삭제한userFriends2D);

  return user의_친구목록;
}

function problem7(user, friends, visitors) {
  var answer;
  const user의_친구목록 = getFriendsArr(user, friends);

  return answer;
}

module.exports = problem7;
