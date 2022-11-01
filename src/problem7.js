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
function visitorScore(visitorsArray, friendNameArray, scoreFriendArray) {
  //scoreFriend 배열에 친구명단을 조사해 점수를 부여하는 함수
  visitorsArray.forEach(function (visitor) {
    if (friendNameArray.includes(visitor)) {
      const friendIndex = friendNameArray.indexOf(visitor);
      scoreFriendArray[friendIndex][0] += 1;
    } else {
      //방문자명단에는 있는데 점수,사람 배열에 없으면 1의값을 갖고 push
      friendNameArray.push(visitor);
      scoreFriendArray.push([1, visitor]);
    }
  }); //visitor에게 점수 부여
  return scoreFriendArray;
}

module.exports = problem7;
