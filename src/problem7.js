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

  // 2. +(사용자와 함께 아는 친구의 수 * 10)
  for(var i = 0; i < friends.length; i++) {
    for(var j = 0; j < userFriends.length; j++) {
      if(friends[i].includes(userFriends[j])) {
        score[friends[i][0] === userFriends[j] ? friends[i][1] : friends[i][0]] += 10;
      }
    }
  }

  return answer;
}

module.exports = problem7;
