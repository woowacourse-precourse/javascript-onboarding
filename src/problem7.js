function problem7(user, friends, visitors) {
  var answer;
  const scoreObj = {};
  const scoreArr = [];
  // 서로 겹치는 친구
  const duplicateFriend = friends.reduce((acc, cur) => acc.concat(cur));

  // 전체 유저 목록 - 겹치는 유저를 제외
  const allUser = duplicateFriend.filter(
    (friend, index) => duplicateFriend.indexOf(friend) === index
  );

  // user의 친구 구하기
  const myFriends = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      const userIndex = friend.indexOf(user);
      if (userIndex === 0) {
        myFriends.push(friend[1]);
      } else {
        myFriends.push(friend[0]);
      }
    }
  });

  //사용자와 함께 아는 친구
  const followFriends = allUser.filter(
    (friend) => !myFriends.includes(friend) && friend !== user
  );

  // 사용자와 함께 아는 친구 10점
  followFriends.forEach((friend) => (scoreObj[friend] = 10));

  // 사용자의 타입라인에 방문한 친구
  const visitFriends = visitors.filter((friend) => !allUser.includes(friend));

  // 방문한 횟수에 따라 1점씩 부여
  for (const friend of visitFriends) {
    scoreObj[friend] = scoreObj[friend] ? scoreObj[friend] + 1 : 1;
  }

  // 추천 친구와 점수 배열로
  for (const friend in scoreObj) {
    scoreArr.push([friend, scoreObj[friend]]);
  }

  // 정렬
  scoreArr.sort(function (a, b) {
    return b[1] - a[1];
  });

  // 점수 높은 순서대로 추천 친구 이름 추출
  const result = [];
  scoreArr.forEach((el) => result.push(el[0]));

  answer = result;

  return answer;
}

module.exports = problem7;
