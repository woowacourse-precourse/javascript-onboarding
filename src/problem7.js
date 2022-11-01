function problem7(user, friends, visitors) {
  var answer;
  return answer;
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

function getScore(friends){
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
  
  // 함께 아는 친구에게 10점씩 부여
  let score = {};
  friendOfFriends.forEach((x)=>{
    score[x] = (score[x] || 0)+10;
  });

  console.log(JSON.stringify(score))
  
}

const user = "mrko";
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]  ;
const visitors =  ["bedi", "bedi", "donut", "bedi", "shakevan"];
getScore(friends)
module.exports = problem7;

