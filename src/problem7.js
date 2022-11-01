// 기능 1-1 ---> 최적화 시도해볼것
function findFriends(user, friends) {
  let friendsArr = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (user === friends[i][j]) {
        let friend = friends[i][1 - j];
        friendsArr.push(friend);
      }
    }
  }
  return friendsArr;
}
// 기능 1-2
function friendsRecommend(user, friends, userFriends) {
  let friendsRecommendArr = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (userFriends.includes(friends[i][j])) {
        let friend = friends[i][1 - j];
        if (friend !== user) friendsRecommendArr.push(friend);
      }
    }
  }
  return friendsRecommendArr;
}
// 기능 2
function getScore(friendArr, crew, score) {
  const crewScoreArr = {};
  crew.forEach((ele) => {
    if (!friendArr.includes(ele)) result[ele] = (result[ele] || 0) + score;
  });

  return crewScoreArr;
}
function problem7(user, friends, visitors) {
  var answer;
  let friendsArr = findFriends(user, friends);
  let friendsRecommendArr = friendsRecommend(user, friends, friendsArr);
  getScore(friendsArr, friendsRecommendArr, 10);
  getScore(friendsArr, visitors, 1);
  return answer;
}

module.exports = problem7;

/* 기능 목록
1. friends에서 user의 친구를 찾고 찾은 user 친구의 친구를 찾아 점수를 부여하는 기능
  1-1. friends에서 user가 들어간 요소를 찾고 user의 친구를 새로운 배열에 할당한다.
  1-2. user의 친구의 친구를 찾고 점수를 부여하여 추천 사용자 아이디와  새로운 배열을 만든다.
2. 배열에서 중복된 사용자를 삭제하고 알맞은 점수를 할당하는 기능 
3. 점수가 높은 순으로 정렬, 추천 점수가 같다면 이름순으로 정렬하는 기능
*/
