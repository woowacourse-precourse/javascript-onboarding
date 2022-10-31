function problem7(user, friends, visitors) {
  const checkUserFreind = userFriend(user,friends)
}

function userFriend(user,friends){
  let userFriendList = [];
  for ( let i = 0 ; i < friends.length; i++){
    if (friends[i][0].includes(user)){
    userFriendList.push(friends[i][1]);
    }
    if(friends[i][1].includes(user)){
    userFriendList.push(friends[i][0]);
    }
  }
  return userFriendList;
}

module.exports = problem7;