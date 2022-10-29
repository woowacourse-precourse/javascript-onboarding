function problem7(user, friends, visitors) {
  let userFriends = [];
  let recommendList = new Map();
  friends.forEach(relationship => {
    const userFriend = isFriend(user, relationship);
    if(userFriend) userFriends.push(userFriend);
  });
  userFriends.forEach(userFriend => {
    friends.forEach(relationship => {
      const friendOfFriend = isFriend(userFriend, relationship);
      if(userFriends.includes(friendOfFriend) || [false, user].includes(friendOfFriend)) return;
      if(recommendList.has(friendOfFriend)) return recommendList.set(friendOfFriend, recommendList.get(friendOfFriend) + 10);
      recommendList.set(friendOfFriend, 10);
    });
  });
  visitors.forEach(visitor => {
    if(userFriends.includes(visitor)) return;
    if(recommendList.has(visitor)) return recommendList.set(visitor, recommendList.get(visitor) + 1);
    recommendList.set(visitor, 1);
  });
  recommendList = sortRecommends([...recommendList]);
  return recommendList;
}

function isFriend(user, relationship) {
  let friend = null;
  if(relationship[0] === user) return friend = relationship[1];
  if(relationship[1] === user) return friend = relationship[0];
  if(friend === null) return false;
}

function sortRecommends(list) {
  let sortedList = [];
  let tiePointUsers = new Set();
  list.sort((a,b) => {
    return b[1] - a[1];
  });    
  for(let i = 0; i < list.length; i++) {
    const userID = list[i][0];    
    const userPoint = list[i][1];
    const nextUserID = list[i + 1]?.[0];     
    const nextUserPoint = list[i + 1]?.[1];  
    tiePointUsers.add(userID); 
    if(userPoint === nextUserPoint) {
      tiePointUsers.add(nextUserID);
      continue;
    }
    sortedList.push(...([...tiePointUsers].sort()));
    tiePointUsers = new Set();
    if(sortedList.length > 5) {
      sortedList = sortedList.splice(0, 5);
      break;
    }
  }
  return sortedList;
}

module.exports = problem7;
