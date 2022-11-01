function restrictions(forms) {
  return forms;
}

function problem7(user, friends, visitors) {
  var answer = [];
  var friend_list = [];
  var cross_friend = [];
  var visitor = [];
  var score = {};

  // 이미 친구인 유저와 친구유저의 친구를 분리한다.
  // user 본인은 없앤다.
  for (var i = 0; i < friends.length; i++) {
    friend_list.push(friends[i][0]);
    if (friends[i][1] == user) continue;
    cross_friend.push(friends[i][1]);
  }

  // 중복 제거
  friend_list = Array.from(new Set(friend_list));
  // cross_friend = Array.from(new Set(cross_friend));

  // 친구의 친구 유저에게 +10점씩 준다.
  for (var j = 0; j < cross_friend.length; j++) {
    var name = cross_friend[j];
    if (name in score) {
      score[name] = score[name] + 10;
      continue;
    }
    score[name] = 10;
  }

  // visitors 에서 친구 제거
  for (var k = 0; k < visitors.length; k++) {
    // console.log(friend_list.includes(visitors[k]));
    if (!friend_list.includes(visitors[k])) visitor.push(visitors[k]);
  }

  // 방문자 유저에게 +1점씩 준다.
  for (var l = 0; l < visitor.length; l++) {
    var name = visitor[l];
    if (name in score) {
      score[name] = score[name] + 1;
      continue;
    }
    score[name] = 1;
  }

  // console.log(score);

  answer = Object.keys(score);
  console.log(answer);
  return answer;
}

module.exports = problem7;
