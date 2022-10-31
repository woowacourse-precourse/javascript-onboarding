function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

//user의 친구 목록
function getUserFriends(user,friends){
  let userFriendSet = [];
  for(let friendSet of friends){
    if(friendSet.includes(user)){
      userFriendSet.push(friendSet);
    }
  } 
  // 중복 제거 및 user 제외 목록 구현
  const userFriend = [...new Set(userFriendSet.flat())];
  let userFriendList = userFriend.filter((ele) => ele !== user);


  return userFriendList

}

const user = "mrko";
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]  ;
const visitors =  ["bedi", "bedi", "donut", "bedi", "shakevan"];
getUserFriends(user,friends)
module.exports = problem7;

