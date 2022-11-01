function problem7(user, friends, visitors) {
  /*
  기능 목록
  1. user의 친구 목록 생성 (추후 친구의 친구 매핑 위해 객체로)
  2. 추천할 타겟 목록 생성
  3. user의 친구의 친구 찾아서 친구 목록 키에 대해 매핑 및 타겟 목록에 추가하여 점수 +10
  4. 방문자 중 친구가 아닌 사람을 타겟에 추가 및 점수 +1
  5. 점수 내림차순 및 점수 동일 시 사전순 정렬 로직 구현
  6. 추천할 타겟들의 이름을 정렬 로직으로 정렬하여 반환
  */
  
  // user의 친구 찾기
  var usersFriends = {};

  for (i = 0; i < friends.length; i++){
    if (friends[i].includes(user)) {
      var friend = friends[i].filter(v => v !== user);
      usersFriends[friend] = [];
    }
  }

  // 추천할 친구 목록
  var recommendUsers = {};

  // user의 친구의 친구 (함께 아는 친구) +10
  var usersFriendsName = Object.keys(usersFriends);

  for (i = 0; i < usersFriendsName.length; i++) {
    var userFriend = usersFriendsName[i];
    for (j = 0; j < friends.length; j++){
      if (friends[j].includes(userFriend) && !friends[j].includes(user)) {
        var friend = friends[j].filter(v => v !== userFriend);
        // 확인 위해 친구 목록에 매핑
        usersFriends[userFriend].push(...friend);
        // 추천할 친구 목록에 추가 후 점수 +10
        if (recommendUsers[friend] !== undefined) recommendUsers[friend] += 10;
        else recommendUsers[friend] = 0;
      }
    }
  }

  // 방문자 +1
  for (i = 0; i < visitors.length; i++){
    var visitor = visitors[i];
    // 이미 친구인 사람 제외
    if (!usersFriendsName.includes(visitor))
      // 점수 +1
      if (recommendUsers[visitor] !== undefined) recommendUsers[visitor] += 1;
      else recommendUsers[visitor] = 1
  }

  // 추천할 친구 목록에서 이름만 추출하여 배열 생성
  var recommendUsersName = Object.keys(recommendUsers);

  // 정렬 로직 (점수 내림차순 및 점수 동일 시 사전순)
  var sortByScores = (a,b) => {
    var scoreA = recommendUsers[a];
    var scoreB = recommendUsers[b];
    if (scoreA === scoreB) return a - b;
    else scoreB - scoreA;
  }

  return recommendUsersName.sort(sortByScores);
}

module.exports = problem7;
