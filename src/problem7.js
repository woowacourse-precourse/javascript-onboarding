function problem7(user, friends, visitors) {
  var answer;
  
  // 1. 친구 관계 객체 생성
  let friendsList = {}
  for (let i=0; i<friends.length; i++){
    friendsList[friends[i][0]] ? friendsList[friends[i][0]].push(friends[i][1]) : friendsList[friends[i][0]] = [friends[i][1]];
    friendsList[friends[i][1]] ? friendsList[friends[i][1]].push(friends[i][0]) : friendsList[friends[i][1]] = [friends[i][0]];
  }

  // 2. 유저별 점수를 담은 객체 생성 (이미 친구인 경우 -1)  e.g. [ ["id",0], ... ]
  let scores = {};

  let friendsListKeys = Object.keys(friendsList)
  let dupAllUsers = friendsListKeys.concat(visitors);
  let set = new Set(dupAllUsers);
  let allUsers = [...set];
  
  for(let i=0;i<allUsers.length;i++){
    // 이미 친구면 -1, 친구가 아니면 0으로 초기값 설정
    let isAlreadyFriend = friendsList[user].find(value => value === allUsers[i]);
    scores[allUsers[i]] = isAlreadyFriend ? -1 : 0;
  }

  // 3. 방문자 점수 계산

  // 4. 함께 아는 친구 점수 계산

  // 5. 점수를 통해 answer 산출

  return answer;
}

module.exports = problem7;
