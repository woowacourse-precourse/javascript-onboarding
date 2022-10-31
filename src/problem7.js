function getFriendMap(friends){
  const friendMap = new Map()
  
  friends.forEach(([firstName,secondName])=>{
    const firstPrevValue = friendMap.get(firstName);
    const secondPrevValue = friendMap.get(secondName);
    
    firstPrevValue? friendMap.set(firstName, [...firstPrevValue, secondName]) : friendMap.set(firstName, [secondName]);
    secondPrevValue? friendMap.set(secondName, [...secondPrevValue, firstName]) : friendMap.set(secondName, [firstName]);
  });

  return friendMap;
}

function countRelationFriend(friendMap, recomandFriend, user) {
  friendMap.get(user).forEach((name)=>{
    if(friendMap.has(name)){
      friendMap.get(name).forEach((friendName)=>{
        const prevCnt = recomandFriend.get(friendName);
        if(friendName !== user){
          prevCnt? recomandFriend.set(friendName, prevCnt + 10) : recomandFriend.set(friendName, 10);
        }
      })
    }
  });
}


function problem7(user, friends, visitors) {
  const friendMap = getFriendMap(friends);
  
}

module.exports = problem7;
