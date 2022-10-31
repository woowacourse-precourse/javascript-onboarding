function problem7(user, friends, visitors) {
  const checkUserFreind = userFriend(user,friends)  
  const checkVisitList = visitorList(visitors)
  console.log(checkUserFreind, checkVisitList)
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

function visitorList(visitors){
  const visitor_List = [];
  visitors.filter((visitor) => {
    visitor_List[visitor] = (visitor_List[visitor] || 0)+1});
    return visitor_List;
  };

module.exports = problem7;