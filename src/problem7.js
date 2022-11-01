// user와 진짜 친구인 사람은 제외할 수 있는 함수
function getRealFriend(user, friends) {
  let getRealFriend = [];

  for(let i = 0; i < friends.length; i++) {
    if(friends[i].includes(user)) {
      getRealFriend.push(friends[i].filter(getRealFriendName => getRealFriendName !== user));
    }
  }
  return getRealFriend; // donut, shakevan -> 진짜 친구를 return
}

// 점수를 매기는 함수.
function FriendScore(user, friends, visitors, getRealFriend) {
  let FriendScore = new Map();

  // 사용자와 함께 아는 친구를 찾아 점수를 매김.
  for(let getRealFriendName of getRealFriend) {
    for(let i = 0; i < friends.length; i++) {
      // user도 아니고 진짜 친구도 포함되어 있지 않은 친구의 이름을 찾아줌.
      if(friends[i].includes(getRealFriendName[0]) && !friends[i].includes(user)){
        let relationshipFriendName = friends[i].filter((getRelationshipFriendName)=> getRelationshipFriendName !== getRealFriendName[0]);
        // 진짜 친구가 포함되어 있고 user는 포함되어 있지 않을때 점수를 준다 ! 
        if(!FriendScore.has(relationshipFriendName)){
          FriendScore.set(relationshipFriendName[0], 10);
        }
      }
    }
  }
  
  // 방문자를 찾아 점수를 매김.
  for(let visitName of visitors){
    if(FriendScore.has(visitName)) FriendScore.set(visitName, FriendScore.get(visitName) +1);
    else FriendScore.set(visitName, 1);
  }
  
  // 진짜 친구가 있다면 결과에서 삭제.
  for(let getRealFriendName of getRealFriend){
    if(FriendScore.has(getRealFriendName[0])) {
      FriendScore.delete(getRealFriendName[0]);
    }
  }
  
  console.log(FriendScore)
  return FriendScore;
}

function problem7(user, friends, visitors) {
  let answer = [];
  
  let recommandFriend = new Map();
  recommandFriend = FriendScore(user, friends, visitors, getRealFriend(user, friends));
  recommandFriend = [...recommandFriend];
  
  //정리 점수가 높은 순서대로 
  recommandFriend.sort((a, b) => b[0] - a[0]);
  
  // 최대 5명만 추천하도록 함.
  for(let i = 0; i < 5; i++) {
    if(recommandFriend[i] === undefined) return answer;
    else answer.push(recommandFriend[i][0]);
  }
  
  return answer;
}

module.exports = problem7;
