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
  // 이름 리스트에 visitors 요소 추가
  for(let i=0; i<visitors.length; ++i){
    namesList.push(visitors[i]);
  }
  let nameList = [...new Set(namesList)]; // 중복제거
  for(let i=0; i<nameList.length; ++i){ // 이미 친구인 사람 제거
    for(let j=0; j<isFriend.length; ++j){
      if(nameList[i]==isFriend[j]) nameList.splice(i,1);
    }
  }
  

  return answer;
}

module.exports = problem7;