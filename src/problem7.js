function problem7(user, friends, visitors) {
  var answer = [];
  var result = [];
  var alreadyFriend = [];
  let friendInfo = {};

  for(let friend in friends){
    if(friends[friend].includes(user)){
      for(let i in friend){
        if(friends[friend][i]!==user){
          alreadyFriend.push(friends[friend][i]);
        }
      }
    }
  }
  for(let i=0;i<friends.length;i++){
    for(let j=0;j<2;j++){     
        if(alreadyFriend.includes(friends[i][j]) == false && friends[i][j] != user){
          friendInfo[friends[i][j]] = 0;
        }
    }
  }
 
  return answer;
}

module.exports = problem7;

user = "mrko";
friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ] ;
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"] ;
//result =  ["andole", "jun", "bedi"] 
problem7(user,friends,visitors);