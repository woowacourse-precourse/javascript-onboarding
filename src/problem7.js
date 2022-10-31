function problem7(user, friends, visitors) {
  var answer = [];
  var score = {};
  const userFriends = [];

  // 1. 사용자의 친구 구하기
  for(var i = 0; i < friends.length; i++) {
    score[friends[i][0]] = 0;
    score[friends[i][1]] = 0;  

    if(friends[i].includes(user))
      userFriends.push(friends[i][0] === user ? friends[i][1] : friends[i][0]);
  }

  return answer;
}

module.exports = problem7;
