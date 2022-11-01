function problem7(user, friends, visitors) {
  var answer = [];
  var friend_list = [];
  var cross_friend = [];
  var result = [];
  var score = {};

  // 이미 친구인 유저와 친구유저의 친구를 분리한다.
  // user 본인은 없앤다.
  for (var i = 0; i < friends.length; i++) {
    friend_list.push(friends[i][0]);
    if (friends[i][1] == user) continue;
    cross_friend.push(friends[i][1]);
  }

  // 친구인 유저에서 중복 제거
  friend_list = Array.from(new Set(friend_list));

  // visitors에서 친구 제거
  visitors = visitors.filter((visitor) => !friend_list.includes(visitor));

  // 친구의 친구 유저에게 +10점씩 준다.
  for (var j = 0; j < cross_friend.length; j++) {
    var name = cross_friend[j];
    if (name in score) {
      score[name] = score[name] + 10;
      continue;
    }
    score[name] = 10;
  }

  // 방문자 유저에게 +1점씩 준다.
  for (var l = 0; l < visitors.length; l++) {
    var name = visitors[l];
    if (name in score) {
      score[name] = score[name] + 1;
      continue;
    }
    score[name] = 1;
  }

  // 점수 정렬 -> 이름 정렬
  for (var name in score) {
    result.push([name, score[name]]);
  }

  // 점수 정렬
  result.sort(function (a, b) {
    return b[1] - a[1];
  });

  // 이름 정렬
  result.sort(function (a, b) {
    return b[0] - a[0];
  });

  // 상위 5개 추출
  result = result.length > 5 ? result.slice(0, 5) : result;

  // 이름만 추출하기
  for (var i = 0; i < result.length; i++) {
    answer.push(result[i][0]);
  }
  return answer;
}

module.exports = problem7;
