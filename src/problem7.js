function problem7(user, friends, visitors) {
  let userFriends = [];
  let recommends = new Map();
  friends.forEach(relationship => {
    const userfriend = isfriend(user, relationship);
    if(userfriend) userFriends.push(userfriend);
  });
  userFriends.forEach(recommendUser => {
    friends.forEach(relationship => {
      const friend = isfriend(recommendUser, relationship)
      if(friend) {
        if(friend === user) return;
        if(recommends.has(friend)) recommends.set(friend, recommends.get(friend) + 10);
        else recommends.set(friend, 10);
      }
    });
  });
  visitors.forEach(visitor => {
    if(userFriends.includes(visitor)) return;
    if(recommends.has(visitor)) {
      recommends.set(visitor, recommends.get(visitor) + 1);
      return;
    }
    recommends.set(visitor, 1);
  });
  recommends = sortRecommends([...recommends]).splice(0,5);
  return recommends;
}

function isfriend(user, relationship) {
  let friend = null;
  if(relationship[0] === user) friend = relationship[1];
  if(relationship[1] === user) friend = relationship[0];
  if(friend === null) return false;
  return friend;
}

function sortRecommends(recommendList) {
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
    } else {
      sortedList.push(...([...tiePointUsers].sort()));
      tiePointUsers = new Set();
    }
  }
  return sortedList;
}

module.exports = problem7;
