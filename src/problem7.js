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
    if (!friendArr.includes(ele))
      crewScoreArr[ele] = (crewScoreArr[ele] || 0) + score;
  });
  return crewScoreArr;
}
// 기능 3
function joinCrew(friendsRecommendArr, visitors) {
  const joinCrewArr = [];
  for (let friend in friendsRecommendArr) {
    joinCrewArr.push([friend, friendsRecommendArr[friend]]);
  }
  for (let visitor in visitors) {
    joinCrewArr.push([visitor, visitors[visitor]]);
  }
  return joinCrewArr;
}
// 기능 4
function sortResult(a, b) {
  if (a[1] === b[1]) {
    //점수가 같은 경우
    return a[0] < b[0] ? -1 : 1; // 이름 순 정렬
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}
function problem7(user, friends, visitors) {
  var answer;
  let sortedAnswer;
  let friendsArr = findFriends(user, friends);
  let friendsRecommendArr = friendsRecommend(user, friends, friendsArr);
  answer = joinCrew(
    getScore(friendsArr, friendsRecommendArr, 10),
    getScore(friendsArr, visitors, 1)
  );
  sortedAnswer = answer.sort(sortResult);

  for (let i = 0; i < sortedAnswer.length; i++) {
    sortedAnswer[i] = sortedAnswer[i][0];
  }

  return sortedAnswer;
}

module.exports = problem7;

/* 기능 목록
1. friends에서 user의 친구를 찾고 찾은 user 친구의 친구를 찾아 점수를 부여하는 기능
  1-1. friends에서 user가 들어간 요소를 찾고 user의 친구를 새로운 배열에 할당한다.
  1-2. user의 친구의 친구를 찾고 점수를 부여하여 추천 사용자 아이디와  새로운 배열을 만든다.
2. 배열에서 중복된 사용자를 삭제하고 알맞은 점수를 할당하는 기능 
3. 중복 사용자 제거 후 점수 할당한 friends와 visitors 합치는 기능
4. 점수가 높은 순으로 정렬, 추천 점수가 같다면 이름순으로 정렬하는 기능
*/
