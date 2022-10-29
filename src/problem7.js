function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

function userFriends(user,friends){
  let userFriends=[];
  for(let i=0; i<friends.length; i++){
    if(friends[i].includes(user)){
      userFriends.push(friends[i].find((el)=>el!==user));
    }
  }
  return userFriends;
}

function friendOfFriends(user,friends){
  let friendOfFriends=[];
  let userFriendArr=userFriends(user,friends);
  for(let i=0; i<userFriendArr.length; i++){
    for(let j=0; j<friends.length; j++){
      if(friends[j].includes(userFriendArr[i])){
        friendOfFriends.push(friends[j].find(el=>el!==userFriendArr[i]));
      }
    }
  }
  return friendOfFriends.filter(el=>el!==user);
}

function giveScore(user,friends,visitors){
  let scoreList=new Map();
  let tenPoint=friendOfFriends(user,friends);
  let onePoint=visitors;
  for(let i=0; i<tenPoint.length; i++){
    scoreList.set(tenPoint[i],(scoreList.get(tenPoint[i]) || 0)+10);
  }
  for(let i=0; i<onePoint.length; i++){
    scoreList.set(onePoint[i],(scoreList.get(onePoint[i]) || 0)+1);
  }
  return [...scoreList];
}