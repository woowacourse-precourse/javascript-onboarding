function getFriendMap(friends){
  const friendMap = new Map()
  
  friends.forEach(([firstName,secondName])=>{
    const firstPrevValue = friendMap.get(firstName);
    const secondPrevValue = friendMap.get(secondName);
    
    friendMap.set(firstName, firstPrevValue? [...firstPrevValue, secondName] : [secondName]);
    friendMap.set(secondName, secondPrevValue? [...secondPrevValue, firstName]: [firstName]);
  });

  return friendMap;
}

function countRelationFriend(friendMap, recommendFriend, user) {
  friendMap.get(user).forEach((name)=>{
    if(friendMap.has(name)){
      friendMap.get(name).forEach((friendName)=>{
        const prevCnt = recommendFriend.get(friendName);
        if(friendName !== user){
          recommendFriend.set(friendName, prevCnt? prevCnt + 10: 10);
        }
      })
    }
  });
}

function countVisitFriend(friendMap, recommendFriend, user, visitors) {
  visitors.forEach((name)=>{
    if(!friendMap.get(user).includes(name)){
      const prevCnt = recommendFriend.get(name);
      recommendFriend.set(name, prevCnt? prevCnt + 1: 1)
    }
  });
}

function problem7(user, friends, visitors) {
  const friendMap = getFriendMap(friends);
  const recommendFriend = new Map();

  countRelationFriend(friendMap, recommendFriend, user);
  countVisitFriend(friendMap, recommendFriend, user, visitors)

  const mapToArray = Array.from(recommendFriend);

  mapToArray.sort((a, b) => b[1] - a[1]);

  const answer = Array.from(mapToArray,([name,_])=> name );
  
  return answer;
}

module.exports = problem7;
