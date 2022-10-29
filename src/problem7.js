function problem7(user, friends, visitors) {
  var answer;
  
  let friendsList = {}

  // 1. 친구 관계 객체 생성
  for (let i=0; i<friends.length; i++){
    friendsList[friends[i][0]] ? friendsList[friends[i][0]].push(friends[i][1]) : friendsList[friends[i][0]] = [friends[i][1]];
    friendsList[friends[i][1]] ? friendsList[friends[i][1]].push(friends[i][0]) : friendsList[friends[i][1]] = [friends[i][0]];
  }

  // 2. 유저 배열 생성

  // 3. 방문자 배열 생성

  // 4. 점수를 통해 answer 산출

  return answer;
}

module.exports = problem7;
