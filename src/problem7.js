function problem7(user, friends, visitors) {
  const checkUserFreind = userFriend(user,friends);  
  const checkVisitList = visitorList(visitors, userFriend);
  const acquaintance_List = acquaintance(checkUserFreind, friends, user);
  const acquaintance_List_Number = acquaintanceListNumber(acquaintance_List);
  const total_Score_List = totalList(checkVisitList, acquaintance_List_Number);
  const totalList_Arr = totalListArr(total_Score_List);
  const equal_Score = equalScore(totalList_Arr);
  const exceptionsHandling = exception(checkUserFreind, equal_Score);

  return exceptionsHandling;
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

function totalListArr(totalList){
  scoreArr = totalList.sort(function(a,b){
    return b.score - a.score;
  });
  return scoreArr;
}
function equalScore(totalListArr){
  equal_Score = totalListArr.sort(function(a,b){
    if (a.score > b.score) {
      return -1;}
    else if (b.score > a.score) {
      return 1;} 
    else if (a.score === b.score) {
      if (a.name > b.name) {
        return 1;} 
    else if (a.name < b.name) {
      return -1;}
    }
    return 0;
  });
  return equal_Score;
}

function exception(userFriend, totalList){
  const recommendationFriend = [];
   for(let i = 0; i < totalList.length; i++ ){
    if(totalList[i].score !== 0 && !userFriend.includes(totalList[i].name)){
      recommendationFriend.push(totalList[i].name)
    }
  }
    return recommendationFriend;
}
module.exports = problem7;