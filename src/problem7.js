function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

function userFriends(user,friends){
  let userFriends=[];
  for(let i=0; i<friends.length; i++){
    if(friends[i].includes(user)){
      userFriends.push(friends[i].find((el)=>el!==user))
    }
  }
  return userFriends;
}


let user='mrko'
let friends=[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ];
console.log(userFriends(user,friends))