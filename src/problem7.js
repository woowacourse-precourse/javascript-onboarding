function problem7(user, friends, visitors) {
  var answer = new Array();
  let namesList = new Array();
  let isFriends = new Array();
  // 친구찾기
  for(let i=0; i<friends.length; ++i){
    if(friends[i][0] == user) isFriends.push(friends[i][1]);
    else if(friends[i][1] == user) isFriends.push(friends[i][0]);
    for(let j=0; j<2; ++j){
      // 이름 리스트에 friends 요소 추가
      if(friends[i][j]!=user) namesList.push(friends[i][j]);
    }
  }
  let isFriend = [...new Set(isFriends)]; // 중복제거

  
  return answer;
}

module.exports = problem7;