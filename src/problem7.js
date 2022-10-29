function problem7(user, friends, visitors) {
  let recommendList = new Map();
  const userFriends = getUserFriends(user, friends);
  recommendList = getFriendOfFriendPoint(user, friends, userFriends);
  recommendList = getVisitPoint(recommendList ,visitors, userFriends);
  recommendList = toSortLimitedRecommendList([...recommendList], 5);
  return recommendList;
}

function isFriend(user, friendship) {
  let friend = null;
  if(friendship[0] === user) return friend = friendship[1];
  if(friendship[1] === user) return friend = friendship[0];
  if(friend === null) return false;
}

function getUserFriends(user, friendshipList) {
  const userFriends = [];
  friendshipList.forEach(friendship => {
    const userFriend = isFriend(user, friendship);
    if(userFriend) userFriends.push(userFriend);
  });
  return userFriends;
}

function getFriendOfFriendPoint(user, friendshipList, userFriends) {  
  const friendOfFriendList = new Map();
  userFriends.forEach(userFriend => {
    friendshipList.forEach(friendship => {
      const friendOfFriend = isFriend(userFriend, friendship);
      if(userFriends.includes(friendOfFriend) || [false, user].includes(friendOfFriend)) return;
      if(friendOfFriendList.has(friendOfFriend)) return friendOfFriendList.set(friendOfFriend, friendOfFriendList.get(friendOfFriend) + 10);
      friendOfFriendList.set(friendOfFriend, 10);
    });
  });
  return friendOfFriendList;
}

function getVisitPoint(recommendList, visitorList, userFriends) {  
  visitorList.forEach(visitor => {
    if(userFriends.includes(visitor)) return;
    if(recommendList.has(visitor)) return recommendList.set(visitor, recommendList.get(visitor) + 1);
    recommendList.set(visitor, 1);
  });
  return recommendList;
}

function toSortLimitedRecommendList(recommendList, LimitedNumber) {
  let sortedList = [];
  let tiePointUsers = new Set();
  recommendList.sort((a,b) => {
    return b[1] - a[1];
  });    
  for(let i = 0; i < recommendList.length; i++) {
    const userID = recommendList[i][0];    
    const userPoint = recommendList[i][1];
    const nextUserID = recommendList[i + 1]?.[0];     
    const nextUserPoint = recommendList[i + 1]?.[1];  
    tiePointUsers.add(userID); 
    if(userPoint === nextUserPoint) {
      tiePointUsers.add(nextUserID);
      continue;
    }
    sortedList.push(...([...tiePointUsers].sort()));
    tiePointUsers = new Set();
    if(sortedList.length > LimitedNumber) {
      sortedList = sortedList.splice(0, LimitedNumber);
      break;
    }
  }
  return sortedList;
}

module.exports = problem7;
