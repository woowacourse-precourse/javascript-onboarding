function getUserFriend(user, friends){
  const userInclArr = friends.filter(friend => friend.includes(user));
  const userInclList = userInclArr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });
  const userFriendList = userInclList.filter(v => !v.includes(user));
  return userFriendList;
}

function getInterFriendNum(user, friends){
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
  const friendCount = (arr) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
  return friendCount(interFriendList);
}

function getScore(user, friends, visitors){
  const friendScore = getInterFriendNum(user, friends);

}

function problem7(user, friends, visitors) {
  
  return getScore(user, friends, visitors);
}

module.exports = problem7;
