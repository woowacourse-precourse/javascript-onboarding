function problem7(user, friends, visitors) {
  const checkUserFreind = userFriend(user,friends);  
  const checkVisitList = visitorList(visitors, userFriend);
  const acquaintance_List = acquaintance(checkUserFreind, friends, user);
  const acquaintance_List_Number = acquaintanceListNumber(acquaintance_List);
  const total_Score_List = totalList(checkVisitList, acquaintance_List_Number);
  console.log(checkUserFreind, checkVisitList, acquaintance_List,acquaintance_List_Number, total_Score_List)

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
  const visitor_List = {};
  const visitorScoreList = [];
  visitors.filter((visitor) => {
    visitor_List[visitor] = (visitor_List[visitor] || 0)+1});
    for (let username in visitor_List){
      visitorScoreList.push( {
        name: username,
        score: visitor_List[username]})
    }
    return visitorScoreList;  
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
  const acquaintanceList = {};
  const  acquaintance_Score = [];
  acquaintance_List.filter((acquaintance) => { acquaintanceList[acquaintance]
     = (acquaintanceList[acquaintance] || 0)+(1*10)});
  for (let username in acquaintanceList){
    acquaintance_Score.push({
      name: username,
      score : acquaintanceList[username]
      })
    }
  return acquaintance_Score;
}

function totalList(visitor, acquaintance){
  const totalScoreList = [];  
  for(let i = 0 ; i < visitor.length; i++){
    if(visitor[i].score > 0){
      totalScoreList.push(visitor[i]);
    }
  }
  for(let i = 0 ; i < acquaintance.length; i++){
    if(acquaintance[i].score > 0){
      totalScoreList.push(acquaintance[i]);
    }
  }
  return totalScoreList;
 }
}

module.exports = problem7;