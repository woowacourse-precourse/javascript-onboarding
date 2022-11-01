function problem7(user, friends, visitors) {
  var answer;
  var userFriends;
  let score= new Map();
  for(let i=0; i<friends.length;i++){
    let newFriends=friends[i][1];
    if(score.has(newFriends)){
      score.set(newFriends, score.get(newFriends)+10);
    }
    else score.set(newFriends, 1);
    if(newFriends.has(user)){
      score.delete(user);
      userFriends.push(friends[i][0]);
    }
  }

  

  return answer;
}

module.exports = problem7;
