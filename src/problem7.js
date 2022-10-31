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


  var arrFriends = [];
  for(let i = 0;i < friends.length;i++){
    if(findFriends(user,friends[i]) !== 0){
      arrFriends.push(findFriends(user,friends[i]));
    }
  }


  var tmp = 0;
  for(let i = 0;i < arrFriends.length;i++){
    for(let j = 0;j < friends.length;j++){
      if(findFriends(arrFriends[i],friends[j]) !== 0 && findFriends(arrFriends[i],friends[j]) !== user){
        tmp = nameMap.get(findFriends(arrFriends[i],friends[j]));
        nameMap.set(findFriends(arrFriends[i],friends[j]),tmp+10);
      }
    }
  }


  for(let i = 0;i < visitors.length;i++){
    if(!nameMap.has(visitors[i])){
      nameMap.set(visitors[i],1);
    }
    else{
      tmp = nameMap.get(visitors[i]);
      nameMap.set(visitors[i],tmp+1);
    }
  }


  for(let i = 0;i < arrFriends.length;i++){
    nameMap.delete(arrFriends[i]);
  }
  nameMap.delete(user);

  
  let sortedMap = [...nameMap].sort((a, b) => a[1] - b[1]).reverse()
  return answer;
}

module.exports = problem7;
