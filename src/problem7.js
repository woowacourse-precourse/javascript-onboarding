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
// 함께 아는 친구의 수만큼 점수를 추가하여 return 하는 함수
function findSameFriends(user, friends, userFriends){
  const map = new Map();
  for(friend of friends){
    if(friend[0] != user && userFriends.has(friend[1])){
      if(!map.has(friend[0]))
        map.set(friend[0], 10);
      else
        map.set(friend[0], map.get(friend[0])+10)
    }
    else if(friend[1] != user && userFriends.has(friend[0])){
      if(!map.has(friend[1]))
        map.set(friend[1], 10);
      else
        map.set(friend[1], map.get(friend[1])+10);
    }
  }
  return map;
}
function problem7(user, friends, visitors) {
  var answer;
  let userFriends = findUserFriends(user, friends);
  let recommendPoints = findSameFriends(user, friends, userFriends);
  for(visitor of visitors){
    // 방문자가 user의 친구인 경우 
    if(userFriends.has(visitor)){
      continue;
    }
    // 방문자가 recommendPoints에 존재하지 않은 경우
    if(!recommendPoints.has(visitor))
      recommendPoints.set(visitor, 1);
    // 방문자가 recommendPoints에 이미 존재 경우
    else
      recommendPoints.set(visitor, recommendPoints.get(visitor)+1)
  }
  let sortPoints = new Map([...recommendPoints].sort(function(a, b){
    if(a[1] == b[1]){
      if(a[0] > b[0])
        return 1;
      if(a[0] < b[0])
        return -1;
      return 0;
    }
    return b[1] - a[1];
    }));
  return answer;
}

module.exports = problem7;
