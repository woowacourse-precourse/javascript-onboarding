// user의 친구 목록을 Set 객체로 return 하는 함수
function findUserFriends(user, friends){
  const set = new Set();
  for(friend of friends){
    if(friend[0] == user)
      set.add(friend[1])
    else if(friend[1] == user)
      set.add(friend[0])
  }
  return set;
}
function problem7(user, friends, visitors) {
  var answer;
  let userFriends = findUserFriends(user, friends);
  
  return answer;
}

module.exports = problem7;
