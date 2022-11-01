function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
function getUserRelationMap(friendsList, user){
  let userSet = new Set();
  friendsList.forEach(friends => {
    if(friends[0]===user){
      userSet.add(friends[1]);
    }else{
      userSet.add(friends[0]);
    }
  })
  return userSet;
}

function getFriendMap(userSet, friendsList, userName){
  let friendMap = new Map();
  userSet.forEach(userFriend => {
    friendsList.filter(friend => 
      friend.indexOf(userFriend) !== -1 && friend.indexOf(userName) === -1
    ).forEach(friend => {
      if(friend[0]===userFriend){
        if(friendMap.has(friend[1])){
          friendMap.set(friend[1], friendMap.get(friend[1])+10);
        }else{
          friendMap.set(friend[1],10)
        }
      }else{
        if(friendMap.has(friend[0])){
          friendMap.set(friend[0], friendMap.get(friend[0])+10);
        }else{
          friendMap.set(friend[0],10)
        }
      }
    })
  })
  return friendMap;
}

function getVisitorMap(visitors){
  let visitorMap = new Map();
  visitors.forEach(visitor => {
    if(visitorMap.has(visitor)){
      visitorMap.set(visitor, visitorMap.get(visitor)+1);
    }else{
      visitorMap.set(visitor, 1)
    }
  })
  return visitorMap;
}

function getRecommendUserMap(friendMap, visitorMap){
  let recommendMap = friendMap;
  visitorMap.forEach((score,visitor) => {
    if(friendMap.has(visitor)){
      recommendMap.set(visitor, visitorMap.get(visitor)+score);
    }else{
      recommendMap.set(visitor, score);
    }
  })
  return recommendMap;
}

function getSortedUserList(recommendMap){
  let sortedList = [];
  if(recommendMap.size === 0){
    return [];
  }
  for(const [user, score] of recommendMap){
    sortedList.push({user: user, score: score});
  }
  sortedList = sortedList.sort((a,b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;

    if (a.user > b.user) return 1;
    if (a.user < b.user) return -1;
  }).map(user => user.user);

  return sortedList;
}