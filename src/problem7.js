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
  friends.forEach(function (discovery) {
    if (discovery.includes(user)) {
      const discoveryIndex = discovery.indexOf(user);
      discovery.splice(discoveryIndex, 1);
      userFriend = discovery + "";
      userFriendName.push(userFriend); // user와 친구인 사람 userFriendName 안에 추가
function friendScore( //user와 친구추가 되있는 사람의 친구들에게 10점 추가
  friendsArray,
  userFriend,
  scoreFriendArray,
  friendNameArray
) {
  friendsArray.forEach(function (plusScore) {
    if (plusScore.includes(userFriend)) {
      const plusScoreIndex = plusScore.indexOf(userFriend);
      plusScore.splice(plusScoreIndex, 1);
      if (plusScore + "" === "") {
      } else {
        userFriendFriend = plusScore + ""; //user의 친구와 친구추가 되있는사람
        const plusScoreIndex2 = friendNameArray.indexOf(userFriendFriend);
        scoreFriendArray[plusScoreIndex2][0] += 10;
      }
    }
  });
  return scoreFriendArray;
function filtering(userFriendNameArray, scoreFriendArray, userName) {
  //점수추가가 완료된 scoreFriend에 제거요소들 삭제
  const set = new Set(userFriendNameArray);
  userFriendNameArray = [...set];

  scoreFriendArray = scoreFriendArray.filter(function (data) {
    return data[0] >= 0; //0점인사람 필터링
  });
  scoreFriendArray = scoreFriendArray.filter(function (data) {
    return data[1] !== userName; //user요소 필터링
  });
  for (i = 0; i < userFriendNameArray.length; i++) {
    scoreFriendArray = scoreFriendArray.filter(function (data) {
      return data[1] !== userFriendNameArray[i]; //기존의 친구 요소 필터링
    });
  }
  return scoreFriendArray;
function sorting(filterScoreFriend) {
  //scoreFriend에 필터링을 마치고 큰점수 > 작은점수 & 같은점수라면 이름순으로 정렬
  filterScoreFriend.sort(function (a, b) {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    }
  });
  return filterScoreFriend;
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
