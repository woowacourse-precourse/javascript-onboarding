function problem7(user, friends, visitors) {
  var answer;
  answer = [];
  var user_friends = [];
  var friends_number = [];
  var visitors_number = [];
  var n = 0;

  //friends에서 사용자인 mrko를 찾는다
  for (let i = 0; i < friends.length; i++) {
    if (user == friends[i][0]) {
      //mrko친구 아이디B를 찾는다
      user_friends[n] = friends[i][1];
      n += 1;
    } else if (user == friends[i][1]) {
      //mrko친구 아이디A를 찾는다
      user_friends[n] = friends[i][0];
      n += 1;
    } else {
      continue;
    }
  }

  return answer;
}

module.exports = problem7;
