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
  // 점수리스트 이차원배열 새로 생성. 0:이름, 1:점수
  let pointList = Array.from(new Array(nameList.length), () => new Array(2).fill(0));
  for(let i=0; i<nameList.length; ++i){
    pointList[i][0] = nameList[i];
  }
  
  // 점수카운트
  for(let i=0; i<friends.length; ++i){
    for(let j=0; j<isFriend.length; ++j){
      if(friends[i][0]==isFriend[j]) {
        for(let k=0; k<nameList.length; ++k){
          if(friends[i][1]==nameList[k]) pointList[k][1]+=10;
        }
      }
      else if(friends[i][1]==isFriend[j]) {
        for(let k=0; k<nameList.length; ++k){
          if(friends[i][0]==nameList[k]) pointList[k][1]+=10;
        }
      }
    }
  }
  for(let i=0; i<visitors.length; ++i){
    for(let j=0; j<nameList.length; ++j){
      if(visitors[i] == nameList[j]) pointList[j][1]++;   
    }
  }
  
  // 정렬 후 상위 5명만 반환
  pointList.sort();
  pointList.sort(comPoint);
  exceptZero(pointList);
  
  let i=0;
  while(answer.length<5){
    answer.push(pointList[i][0]);
    i++;
    if(i==pointList.length) break;
  }
  
  return answer;
}

function comPoint(a,b) {
  if (a[1]<b[1]) {
    return 1;
  }
  if (a[1]>b[1]) {
    return -1;
  }
  return 0;
}

function exceptZero(dArray) {
  for(let i=0; i<dArray.length; ++i){
    if(dArray[i][1] == 0) {
      dArray = dArray.splice(i,dArray.length-i);
      break;
    }
  }
}

module.exports = problem7;