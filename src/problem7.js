function problem7(user, friends, visitors) {
  var answer = [];
  var alreadyFriend = [];

  for(let friend in friends){
    if(friends[friend].includes(user)){
      for(let i in friend){
        if(friends[friend][i]!==user){
          alreadyFriend.push(friends[friend][i]);
        }
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