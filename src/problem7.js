// 기능목록
// 1. user의 친구목록 배열 생성
// 2. user의 친구목록원소들과 겹치는 친구가 있는 사용자들을 탐색
// 3. 친구 추천 목록 생성 및 탐색된 사용자들을 +10
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

// score에 겹치는 친구 점수 기록 +10
function addFriendsScore(score, overlapUsers) {
  overlapUsers.forEach((user) => {
    score[user] += 10;
  });
}

// score에 visitors 점수기록 +1
function addVisitorsScore(score, 친구제외visitors) {
  친구제외visitors.forEach((user) => {
    score[user] += 1;
  });
}

// score객체를 2차원 배열로 정렬후 반환
function sortScore(score) {
  const scoreArr = Object.entries(score);

  if (scoreArr.length === 0) {
    answer = [];
    return answer;
  } else if (scoreArr.length === 1) {
    answer = scoreArr[0][0];
    return answer;
  }

  scoreArr.sort((prev, cur) => {
    if (prev[1] < cur[1]) return 1;
    if (prev[1] > cur[1]) return -1;
    if (prev[0] > cur[0]) return 1;
    if (prev[0] < cur[0]) return -1;
  });
  return scoreArr;
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

  addFriendsScore(score, overlapUsers);
  addVisitorsScore(score, 친구제외visitors);

  return answer;
}

module.exports = problem7;
