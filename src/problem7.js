function problem7(user, friends, visitors) {
  var answer = [];
  let user_friend = [];
  var map = new Map();
  for (var i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      user_friend.push(friends[i][1]);
      continue;
    } else if (friends[i][1] == user) {
      user_friend.push(friends[i][0]);
      continue;
    }
  }
  return answer;
}

module.exports = problem7;
