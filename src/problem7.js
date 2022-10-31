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
    } else if (user == friends[i][1]) {
    } else {
      continue;
    }
  }

  return answer;
}

module.exports = problem7;
