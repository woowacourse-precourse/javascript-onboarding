function getUserFriend(user, friends){
  const userInclArr = friends.filter(friend => friend.includes(user));
  const userInclList = userInclArr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });
  const userFriendList = userInclList.filter(v => !v.includes(user));
  return userFriendList;
}

function getInterFriendScore(user, friends){
  const userFriendList = getUserFriend(user, friends);
  const friendInclArr = [];
  let interFriendList = [];

  for(let i = 0 ; i<friends.length ; i++){
    if(userFriendList.filter(v => friends[i].includes(v)).length == 1){
      friendInclArr.push(friends[i]);
    }
  }
  interFriendList = friendInclArr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });
  interFriendList = interFriendList.filter(v => !userFriendList.includes(v));
  interFriendList = interFriendList.filter(v => !v.includes(user));

  const friendCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 10 }), {});
  return friendCount(interFriendList);
}

function getVisitList(user, friends, visitors){
   const userFriendList = getUserFriend(user, friends);
   const visitList = visitors.filter(v => !userFriendList.includes(v));
   return visitList;
}

function getCrewName(user, friends, visitors){
  const crewScore = getInterFriendScore(user, friends);
  const visitList = getVisitList(user, friends, visitors);
  
  for(let i = 0; i<visitList.length ; i++){
    if(crewScore.hasOwnProperty(visitList[i])){
      crewScore[visitList[i]]+=1;
    }
    else{
      crewScore[visitList[i]] = 0;
      crewScore[visitList[i]] +=1;
    }
  }
  const sortable = Object.fromEntries(Object.entries(crewScore).sort(([, a], [, b]) => b - a));
  const crewName = Object.keys(sortable);
  crewName.splice(5);
  return crewName;
}

function problem7(user, friends, visitors) {
  const crewName = getCrewName(user, friends, visitors)

  return crewName;
}

module.exports = problem7;
