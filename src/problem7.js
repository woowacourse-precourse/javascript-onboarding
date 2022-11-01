function problem7(user, friends, visitors) {
  let recommendList = new Map();
  const userFriends = getUserFriends(user, friends);
  recommendList = getFriendOfFriendPoint(user, friends, userFriends);
  recommendList = getVisitPoint(recommendList ,visitors, userFriends);
  recommendList = toSortRecommendList([...recommendList]);
  const limitedLength = 5;
  if(recommendList.length > limitedLength)recommendList = recommendList.splice(0, limitedLength);
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

function toSortRecommendList(recommendList) {
  recommendList.sort((user1, user2) => {    
    const user1ID = user1[0];    
    const user1Point = user1[1];
    const user2ID = user2[0];    
    const user2Point = user2[1];
    if(user1Point > user2Point) return -1;
    if(user1Point < user2Point) return 1;
    if(user1ID < user2ID) return -1;
    return 1;
  });    
  let sortedList = recommendList.map(recommendedUser => {
    const recommendedUserID = recommendedUser[0];
    return recommendedUserID;
  });
  return sortedList;
}

module.exports = problem7;
