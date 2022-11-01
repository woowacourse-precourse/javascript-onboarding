function problem7(user, friends, visitors) {
  const totalScore = getScore(user,friends,visitors);

  // 점수를 기준으로 정렬
  const sortedTotalScore = Object.entries(totalScore).sort(
    function(a,b){
      // 점수별로 내림차순 
      if(a[1] > b[1]) return -1;
      if(a[1] < b[1]) return 1;
      // 점수가 같다면 이름별로 오름차순
      if(a[0] > b[0]) return 1;
      if(a[0] < b[0]) return -1;
    });
    

  // 가장 점수가 많은 5명의 친구 이름을 출력
  let recommandFriends = [];

  for(let ele of sortedTotalScore){
    if(ele)
  recommandFriends.push(ele[0]) ;
  }  
  let topFive = recommandFriends.slice(0,5);
  return topFive
  
} 
  

//user의 친구 목록
function getUserFriends(userName,friendsList){
  let userFriends = [];
  for(let friendSet of friendsList){
    if(friendSet.includes(userName)){
    if(friendSet[0] === userName){
    userFriends.push(friendSet[1]);
    } else if(friendSet[1] === userName){
    userFriends.push(friendSet[0]);
    }
    }
  } 
  return userFriends
}

// 점수 목록을 얻기 위함
function getScore(user,friends,visitors){
  // user친구의 친구 목록
  const myFriends = getUserFriends(user,friends);
  let  friendOfFriendsSet= [];
  for(let friend of myFriends){ 
    friendOfFriendsSet.push(getUserFriends(friend,friends));
  } 

  // 친구의 친구목록에서 user이름 제외
  let friendOfFriends = [];
  for(let ele of friendOfFriendsSet.flat()){
    if(!ele.includes(user)) friendOfFriends.push(ele)
  }

  // 이미 친구인 사람은 친구의 친구 목록에서 제외함.
  const realFriends = friendOfFriends.filter(x=>!myFriends.includes(x))

  
  // 함께 아는 친구에게 10점씩 부여
  let score = {};
  realFriends.forEach((x)=>{
    score[x] = (score[x] || 0)+10;
  });
  
  // 이미 친구는 제외한 방문자 명단
  const realVisitors = visitors.filter(x => !myFriends.includes(x));
  
  //방문자는 1점씩 부여
  realVisitors.forEach((x)=>{
    score[x] = (score[x] || 0) +1;
  })

  return score;
  
}

module.exports = problem7;

