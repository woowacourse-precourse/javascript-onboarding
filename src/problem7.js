// 기능목록
// 1. user의 친구목록 배열 생성
// 2. user의 친구목록원소들과 겹치는 친구가 있는 사용자들을 탐색
// 3. 친구 추천 목록 생성 및 탐색된 사용자들을 +10
// 4. visitors중 친구목록원소와 비교하여 친구들은 제외
// 5. visitors의 해당 사용자 횟수만큼 +1
// 6. 완성된 score객체를 배열로 변환 및 점수-이름 순으로 정렬
// 7. 상위 5개의 id와점수 배열 자르기 및 id만 answer에 저장

// 해당 user의 친구목록 반환 함수
function getFriendsArr(user, friends) {
  const userFriends2D = friends.filter((idArr) => idArr.includes(user));
  const 해당유저정보삭제한userFriends2D = userFriends2D.map((idArr) =>
    idArr.filter((id) => id !== user)
  );
  const user의_친구목록 = Arr2Dto1D(해당유저정보삭제한userFriends2D);

  return user의_친구목록;
}

// 배열 2차원에서 1차원으로 반환 함수
function Arr2Dto1D(arr_2d) {
  let arr_1d = [];
  arr_2d.forEach((ele) => {
    arr_1d = [...arr_1d, ...ele];
  });

  return arr_1d;
}

// 겹치는 친구 목록 반환
function findOvrlapUsers(user, user의_친구목록, friends) {
  const overlapUser3D = user의_친구목록.map((친구ID) =>
    friends.filter((friend) => {
      if (friend.includes(user)) {
        return false;
      } else if (friend.includes(친구ID)) {
        return true;
      }
    })
  );

  const overlapUser = Arr2Dto1D(Arr2Dto1D(overlapUser3D));
  const 해당유저의친구삭제overlapUser = overlapUser.filter(
    (id) => !user의_친구목록.includes(id)
  );

  return 해당유저의친구삭제overlapUser;
}

// 중복 키워드 삭제 함수
function deleteDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// visitors중 친구인 사람 삭제
function delteFriends(user의_친구목록, visitors) {
  return visitors.filter((visitor) => !user의_친구목록.includes(visitor));
}

function problem7(user, friends, visitors) {
  var answer;
  const user의_친구목록 = getFriendsArr(user, friends);
  const overlapUsers = findOvrlapUsers(user, user의_친구목록, friends);

  const 중복없는overlapUsers = deleteDuplicates(overlapUsers);
  const 친구제외visitors = delteFriends(user의_친구목록, visitors);
  const 추천친구목록 = deleteDuplicates([
    ...중복없는overlapUsers,
    ...친구제외visitors,
  ]);
  const score = {};
  추천친구목록.forEach((id) => (score[id] = 0));

  return answer;
}

module.exports = problem7;

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
