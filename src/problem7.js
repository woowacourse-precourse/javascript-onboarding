function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
function getUserRelationMap(friendsList, user){
  let userSet = new Set();
  friendsList.forEach(friends => {
    if(friends[0]===user){
      userSet.add(friends[1]);
    }else{
      userSet.add(friends[0]);
    }
  })
  return userSet;
}

