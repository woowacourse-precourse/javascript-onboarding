function problem7(user, friends, visitors) {
  var answer=answerList(user,friends,visitors);
  if(!error(user, friends, visitors) || !lengthError(user, friends, visitors)){
    throw new Error('제한사항을 확인하세요');
  }
  return answer;
}

module.exports = problem7;

function userFriends(user,friends){
  let userFriends=[];
  friends.forEach(el=>{
    if(el.includes(user)){
      userFriends.push(el.find((x)=>x!==user));
    }
  })
  return userFriends;
}

function friendOfFriends(user,friends){
  let friendOfFriends=[];
  let userFriendArr=userFriends(user,friends);
  userFriendArr.map((el)=>{
    friends.forEach((friend)=>{
      if(friend.includes(el)){
        friendOfFriends.push(friend.find(x=>x!==el));
      }
    })
  })
  return friendOfFriends
  .filter((el)=>!userFriendArr
  .includes(el) && el!==user);
}

function visitorsRemove(user,friends,visitors){
  let removeTarget=userFriends(user,friends);
  let removeResult=[];
  visitors.forEach((el)=>{
    if(!removeTarget.includes(el)){
      removeResult.push(el);
    }
  })
  return removeResult;
}

function giveScore(user,friends,visitors){
  let scoreList=new Map();
  let tenPoint=friendOfFriends(user,friends);
  let onePoint=visitorsRemove(user,friends,visitors);
  tenPoint.forEach((el)=>{
    scoreList.set(el,(scoreList.get(el) || 0)+10);
  })
  onePoint.forEach((el)=>{
    scoreList.set(el,(scoreList.get(el) || 0)+1);
  })
  return [...scoreList];
}

function answerList(user,friends,visitors){
  let scoreList=giveScore(user,friends,visitors)
  scoreList.sort((a,b)=>{
    if(a[1]===b[1]){
      if(a[0]>b[0]) return 1;
      if(a[0]<b[0]) return -1;
    }
    return b[1]-a[1];
  })
  if(scoreList.length>5){
    return scoreList.slice(0,5).map((el)=>el[0]);
  }
  return scoreList.map((el)=>el[0]);
}

function lengthError(user,friends,visitors){
  const friendsIdLength=friends.join().split(',').map((el)=>el.length)
  if(user.length<1 || user.length>30){
    return false;
  }
  if(friends.length>10000){
    return false;
  }
  for(let i=0; i<friendsIdLength.length; i++){
    if(friendsIdLength[i]<1 || friendsIdLength[i]>30){
      return false;
    }
  }
  if(visitors.length<0 || visitors>10000){
    return false;
  }
  return true;
}

function error(user,friends,visitors){
  if((user.replace(/['a-z']/g,'').length!==0)){
    return false;
  }
  if(new Set(friends.map((el)=>el.toString())).size!==friends.length){
    return false;
  }
  if(answerList(user,friends,visitors).length===0){
    return false;
  }
  return true;
}