//friends에 있는 모든 사람을 대상으로 하는 FriendObj를 생성한다.
function makeFriendsObj(friends) {
  let friendsObj = {};
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < friends.length; i++) {
      if (!(friends[i][j] in friendsObj)) {
        friendsObj[friends[i][j]] = new Array();
      }
      friendsObj[friends[i][j]].push(friends[i][j == 1 ? 0 : 1]);
    }
  }
  return friendsObj;
}
//추천 점수를 저장하는 pointObj를 생성한다.
function makePointObj() {}
//user와 같은 친구를 가진 사람들의 점수를 계산한다.
function addSameFriendPoint() {}
//user의 timeline에 방문한 사람들의 점수를 계산한다.
function addVisitorPoint() {}
//점수에 따라 정렬하고, 추천 점수가 같은 경우 이름 순으로 정렬한다.
function sortWithPoint() {}
//정답 배열을 생성한다.
function makeAnswerArr() {}

function problem7(user, friends, visitors) {
  var answer = [];
  let friendObj = makeFriendsObj(friends);

  return answer;
}

module.exports = problem7;
