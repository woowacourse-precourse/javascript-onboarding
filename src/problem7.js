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

// function getVisitorScore(user, friends, visitors){
//   const userFriendList = getUserFriend(user, friends);
//   const visitList = visitList.filter(v => !userFriendList.includes(v));
//   const visitCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
//   return visitCount(visitors);
// }

function getVisitList(user, friends, visitors){
   const userFriendList = getUserFriend(user, friends);
   const visitList = visitors.filter(v => !userFriendList.includes(v));

   return visitList;
}

function getScore(user, friends, visitors){
  const interFriendScore = getInterFriendScore(user, friends);
  const visitList = getVisitList(user, friends, visitors);

  
  for(let i = 0; i<visitList.length ; i++){
    if(interFriendScore.hasOwnProperty(visitList[i])){
      console.log(visitList[i]+"있음!");
      interFriendScore[visitList[i]]+=1;
    }
    else{
      console.log(visitList[i]+"없음!")
      interFriendScore[visitList[i]] = 0;
      interFriendScore[visitList[i]] +=1;
      console.log(interFriendScore[visitList[i]]);

    }
  }
  console.log(interFriendScore);

}

function problem7(user, friends, visitors) {
  
  return getScore(user, friends, visitors);
}

module.exports = problem7;
