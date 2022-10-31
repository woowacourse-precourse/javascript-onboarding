function problem7(user, friends, visitors) {
  const checkUserFreind = userFriend(user,friends);  
  const checkVisitList = visitorList(visitors);
  const acquaintance_List = acquaintance(checkUserFreind, friends, user);
  const acquaintance_List_Number = acquaintanceListNumber(acquaintance_List);
  console.log(checkUserFreind, checkVisitList,acquaintance_List,acquaintance_List_Number);
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

function acquaintance(userFriend, friends, user){
  let acquaintance_List = [];
  for (let i = 0; i < userFriend.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] == userFriend[i] && friends[j][1] != user) {
        acquaintance_List.push(friends[j][1]);
      } else if (friends[j][1] == userFriend[i] && friends[j][0] != user) {
        acquaintance_List.push(friends[j][0]);
      }
    }
  }
  return acquaintance_List;
}

function acquaintanceListNumber(acquaintance_List){
  const acquaintanceListNumber = [];
  acquaintance_List.filter((acquaintance) => { acquaintanceListNumber[acquaintance]
     = (acquaintanceListNumber[acquaintance] || 0)+1});
     return acquaintanceListNumber;
}

module.exports = problem7;