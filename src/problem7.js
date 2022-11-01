function problem7(user, friends, visitors) {
  var answer;
  answer=[];
  let user_friends = [];
  let map = new Map();

  for(i=0;i<friends.length;i++){
    if(friends[i][0]==user){
      user_friends.push(friends[i][1])
    }
    else if(friends[i][1]==user){
      user_friends.push(friends[i][0])
    }
  }

  for(i=0;i<friends.length;i++){
    if(friends[i][0]!=user&&friends[i][1]!=user){
      if(user_friends.includes(friends[i][0])){
        map.set(friends[i][1],10)
      }
      else if(user_friends.includes(friends[i][1])){
        map.set(friends[i][0],10);
      }
    }
  }
  // 함께 하는 친구 점수 10점

  for(i=0;i<visitors.length;i++){
    if(!map.has(visitors[i]) && !user_friends.includes(visitors[i])){
      map.set(visitors[i],1);
    } else if(!user_friends.includes(visitors[i])){
      map.set(visitors[i],map.get(visitors[i])+1);
    }
  }

  //들른친구 1점
  newMap=[...map];

  var result = newMap.sort((a,b)=>{
    if(a[0]==b[0]){
      return a[1]-b[1];
    } else {
      return b[0]-[0];
    }
  })

  // 점수 내림차순으로 하되 점수 같을경우 이름 오름차순으로 정렬 

  for(i=0;i<result.length;i++){
    if(i==5){
      break;
    }
    answer.push(result[i][0]);

  }
  // 5번까지 출력 및 id만 출력하기


  return answer;
}

module.exports = problem7;
