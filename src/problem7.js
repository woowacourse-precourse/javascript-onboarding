function findFriends(user, friend){
  if(friend[0] === user){
    return friend[1];
  }
  else if(friend[1] === user){
    return friend[0];
  }
  else{
    return 0;
  }
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
