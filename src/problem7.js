function problem7(user, friends, visitors) {
  var answer;
  return answer;
  let friendName = []; //이름만 담는 리스트 friendName
  friends.forEach(function (item) {
    friendName.push(item[0]);
    friendName.push(item[1]);
  });
  friendName = friendName.filter(
    (item, pos) => friendName.indexOf(item) === pos
  ); //friendName 에 중복제거
  let scoreFriend = [];
  friendName.forEach(function (score) {
    scoreFriend.push([0, score]);
  }); // 점수 이름 담긴 scoreFriend + 점수는 0으로 초기화
}

module.exports = problem7;
