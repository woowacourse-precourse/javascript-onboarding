function findFriends(user, friend){
  if(friend[0] === user){
    return friend[1];
  }
  else if(friend[1] === user){
    return friend[0];
  }
  else{
    return 0;
  }
}

function problem7(user, friends, visitors) {
  var answer;
  let nameMap = new Map();

  for(let i = 0;i < friends.length;i++){
    if(!nameMap.has(friends[i][0])){
      nameMap.set(friends[i][0],0);
    }
    if(!nameMap.has(friends[i][1])){
      nameMap.set(friends[i][1],0);
    }
  }
  return answer;
}

module.exports = problem7;
