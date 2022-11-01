/* 기능 목록
* 1. friends 요소 중 user를 포함하고 있는 요소는 userFriends에 추가, friends에서 삭제
* 2. visitors 요소 중 맵(scoreMap)에 없으면 추가 후 1점, 있으면 +1점
* 3. firends에 userFriends 요소가 없으면 추가 후 10점, 있으면 +10점
* 4. scoreMap에서 userFriends 요소가 있으면 삭제
* 5. scoreMap 점수를 mapVal에 저장 후 내림차순 정렬
* 6. mapVal 길이가 5보다 길면 자르기
* 7. scoreMap을 이름 순으로 정렬
* 8. mapVal 점수에 해당하는 사람을 result에 추가
* 9. 결과출력
* 10. 코드 정리
*/

function problem7(user, friends, visitors) {
  var userFriends = [];
  
  for(var friend of friends){
    if(friend.includes(user)){ //user가 있으면 userFriends에 추가
      if(friend[0] != user){ 
        userFriends.push(friend[0]);
      }else{
        userFriends.push(friend[1]);
      }
      friends.splice(friends.indexOf(friend),1);
    }
  }
  
  var socreMap = new Map();
  for(var visitor of visitors){
    if(!userFriends.includes(visitor)){
      if(!socreMap.has(visitor)){
        socreMap.set(visitor,1);
      }else{
        socreMap.set(visitor, socreMap.get(visitor)+1);
      }
    }
  }

  for (const uFriend of userFriends){
    for (const friend of friends){
      if(friend.includes(uFriend)){
        if(friend[0] == uFriend){
          if(!socreMap.has(friend[1])){
            socreMap.set(friend[1],10);
          }else{
            socreMap.set(friend[1], socreMap.get(friend[1])+10);
          }
        }else{
          if(!socreMap.has(friend[0])){
            socreMap.set(friend[0],10);
          }else{
            socreMap.set(friend[0], socreMap.get(friend[0])+10);
          }
        }
      }
    }
  }
  
  for (var friend of userFriends){ 
    socreMap.delete(friend);
  }
  
  var mapVal_ = socreMap.values();
  var mapVal = [...mapVal_];
  
  var sortMapVal = mapVal.sort(function compare(a, b) {
    return b-a;
  });

  if (sortMapVal.length > 5){
    sortMapVal = sortMapVal.slice(0,5);
  }

  var sortMapArr = [...socreMap];
  sortMapArr.sort();
  let sortScoreMap = new Map(sortMapArr);

  var result = [];
  var i = 0;

  for (const score of sortMapVal){
    for (let [key, value] of sortScoreMap) {
      if(!result.includes(key) && score == value && value != 0 && i< 5){
        result.push(key);
        i++;
      }
    }
  }
  return result;

}

module.exports = problem7;
