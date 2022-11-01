function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

//user의 친구 목록
function getUserFriends(user,friends){
  let userFriends = [];
  for(let friendSet of friends){
    if(friendSet.includes(user)){
    if(friendSet[0] === user){
    userFriends.push(friendSet[1]);
    } else if(friendSet[1] === user){
    userFriends.push(friendSet[0]);
    }
    }
  } 
  return userFriends
}

function getFrindOfFriends(friends){

}
const user = "mrko";
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]  ;
const visitors =  ["bedi", "bedi", "donut", "bedi", "shakevan"];
getUserFriends(user,friends)
module.exports = problem7;

