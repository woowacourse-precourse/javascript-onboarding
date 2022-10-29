function problem7(user, friends, visitors) {
  const find_current_friends = (user, friends) => {
    let foundFriends = [];
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (user == friends[i][j]) {
          foundFriends.push(friends[i][1 - j]);
        }
      }
    }
    return foundFriends;
  };

  let current_friends = find_current_friends(user, friends);

  // 2. 추천 친구 목록 만들기
  // 2-2. 사용자와 함께 아는 친구 구하기
  let recommendations = [];
  for (let i = 0; i < current_friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      for (let k = 0; k < 2; k++) {
        if (current_friends[i] == friends[j][k] && user != friends[j][1 - k]) {
          // 추천친구목록에 추가
          recommendations.push([friends[j][1 - k], 10]);
        }
      }
    }
  }

  // 2-2. 사용자 타임라인 방문자 찾기
  for (let i = 0; i < visitors.length; i++) {
    // 사용자와 이미 친구라면
    isBreak = false;
    for (let j = 0; j < current_friends.length; j++) {
      if (visitors[i] == current_friends[j]) {
        isBreak = true;
        break;
      }
    }
    if (!isBreak) {
      // 추천친구목록에 추가
      recommendations.push([visitors[i], 1]);
    }
  }

  // 3. 최종 추천친구 목록 만들기
  let recommendations2 = [];
  for (let i = 0; i < recommendations.length - 1; i++) {
    let score_sum = recommendations[i][1];
    for (let j = i + 1; j < recommendations.length; j++) {
      // 같은 사람인 경우
      if (recommendations[i][0] == recommendations[j][0]) {
        score_sum += recommendations[j][1];
        recommendations.splice(j, 1);
        j--;
      }
    }
    // 새 배열에 최종 [이름, 점수] 값 추가
    recommendations2.push({ name: recommendations[i][0], score: score_sum });
  }

  // 4. 최종 추천친구 목록 정렬하기
  recommendations2.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    // 점수 같을 경우
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  let answer = [];
  // 5. 최종 추천친구 중 가장 점수 높은 5명 리턴하기
  for (let i = 0; i < recommendations2.length; i++) {
    if (i > 4) {
      break;
    }
    answer.push(recommendations2[i].name);
  }

  return answer;
}

module.exports = problem7;
