function problem7(user, friends, visitors) {
  var answer;
  var score = [];
  var real_friends = [];
  var answer = [];

  // * User 친구 찾기
  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < 2; j++) {
      if (friends[i][j] == user) {
        real_friends.push(friends[i][0]);
      }
    }
  }

  // * User 친구의 친구 찾기
  for (var i = 0; i < real_friends.length; i++) {
    for (var j = 0; j < friends.length; j++) {
      // * User의 친구이고 User 친구의 친구가 User가 아니라면
      if (real_friends[i] == friends[j][0] && friends[j][1] !== user) {
        score[friends[j][1]] = 10;
        if (Object.keys(score).includes(friends[j][1])) {
          // * 이미 존재하면 +10
          score[friends[j][1]] += 10;
        }
      }
    }
  }
  // * 방문자 중 User 친구 있으면 visitors에서 제거하기 위함
  for (var i = 0; i < real_friends.length; i++) {
    for (var j = 0; j < visitors.length; j++) {
      if (visitors[j] == real_friends[i]) {
        // * User 친구라 확인될 시, splice를 이용해 j번째부터 1개 제거
        visitors.splice(j, 1);
      }
    }
  }

  // * visitors 배열에 있는 방문자를 score Object에 추가하고 value 값을 0으로 초기화
  for (var i = 0; i < visitors.length; i++) {
    score[visitors[i]] = 0;
  }

  // * 방문자에게 점수
  for (var i = 0; i < visitors.length; i++) {
    // * 만약 방문자의 이름이 score의 key에 이미 존재 한다면
    if (Object.keys(score).includes(visitors[i])) {
      score[visitors[i]] += 1;
    }
  }
  // * score의 오브젝트 value가 0이 아니고 내림차순 정렬한 뒤, answer에 key들만 추출
  for (var i = 0; i < 5; i++) {
    if (Object.values(score) !== 0) {
      Object.entries(score).sort((a, b) => b[1] - a[1]);
      answer = Object.keys(score);
    }
  }

  return answer;
}

module.exports = problem7;
