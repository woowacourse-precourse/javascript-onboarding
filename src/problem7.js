function problem7(user, friends, visitors) {
  let userName = [];
  friends.forEach(el=>{
    userName.push(el[0]);
    userName.push(el[1]);  
  });
  visitors.forEach(el=>{
    userName.push(el);
  })
  userName=[...new Set(userName)];
  userName.sort();  //
  let userPoint = new Array(userName.length).fill(0);
  let myFriends = [];
  friends.forEach(el=>{
    if(el[0] === user){
      myFriends.push(el[1]);
    }else if(el[1] === user){
      myFriends.push(el[0]);
    }
  });
  friends.forEach(friendRelation=>{
    myFriends.forEach(myFriend=>{
      if(friendRelation[0]===myFriend){
        let idx = userName.indexOf(friendRelation[1]);
        userPoint[idx]+=10;        
      }else if(friendRelation[1]===myFriend){
        let idx = userName.indexOf(friendRelation[0]);
        userPoint[idx]+=10;
      }
    })
  });
  visitors.forEach(el=>{
    let idx = userName.indexOf(el);
    userPoint[idx]+=1;
  });
  myFriends.push(user);
  myFriends.forEach(el=>{
    let idx = userName.indexOf(el);
    userPoint[idx] = 0;
  })
  let answer = [];
  for(let i=0;i<5;i++){
    let maxValue = Math.max(...userPoint);
    if(maxValue===0){
      return answer;
    }
    else{
      let idx = userPoint.indexOf(maxValue);
      answer.push(userName[idx]);
      userPoint.splice(idx,1);
      userName.splice(idx,1);
    }
  }
  return answer;
}
/* 1. 모든 유저의 이름을 담은 배열을 만든다 userName
  2. 추천 점수가 같은 경우 이름순으로 정렬
   -> problem7("a",[ ["a", "b"], ["b", "g"], ["b", "c"], ["b", "f"], ["b", "e"], ["b", "d"], ["b", "h"]],["i"])
  3. 모든 유저의 점수를 담을 배열을 만든다. userPoint
  4. 내(user) 친구 목록을 만든다. myFriends
  5. 친구 관계(friends)를 보고, 나의 친구와(myFriends) 친구인 유저에게 +10점 
     (userName에서 myFriend의 친구의 idx를 찾아 userPoint[idx]에 +10)
  6. Visitors 만큼 userName에 +1점 (3과 동일한 방법으로 점수 더함)
  7. MyFriends와 본인(user)의 점수를 0점으로 (이미 친구인 유저와 본인을 추천할 수는 없으므로)
  8. 0점 이상인 것들 중 상위 5개 return  
*/
module.exports = problem7;
