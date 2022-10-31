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

function countVisitFriend(friendMap, recomandFriend, user, visitors) {
  visitors.forEach((name)=>{
    if(!friendMap.get(user).includes(name)){
      const prevCnt = recomandFriend.get(name);
      prevCnt? recomandFriend.set(name, prevCnt + 1) : recomandFriend.set(name, 1);
    }
  });
}

function problem7(user, friends, visitors) {
  const friendMap = getFriendMap(friends);
  const recomandFriend = new Map();

  countRelationFriend(friendMap, recomandFriend, user);
  countVisitFriend(friendMap, recomandFriend, user, visitors)

  const mapToArray = Array.from(recomandFriend);

  mapToArray.sort((a, b) => b[1] - a[1]);

  const answer = Array.from(mapToArray,([name,_])=> name );
  
  return answer;
}

module.exports = problem7;
