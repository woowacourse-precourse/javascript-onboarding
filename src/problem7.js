function problem7(user, friends, visitors) {
  var answer;
  const alreadyFriends = [];

  for(i in friends){
    if(user == friends[i][0]){
      return alreadyFriends.push(friends[i][1]);
    }
    if(user == friends[i][1] && alreadyFriends.indexOf(user) == -1){
      alreadyFriends.push(friends[i][0]);
    }
  }

  return answer;
}

module.exports = problem7;
