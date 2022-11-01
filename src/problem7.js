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

  for(let j=0; j<visitors.length;j++){
    if(score.has(visitors[j])){
      score.set(visitors[j], score.get(visitors[j])+1);
    } else score.set(visitors[j],1);
    for(let k=0; k<userFriends.length;k++){
      if(score.has(userFriends[k])){
        score.delete(visitors[j]);
      }
    }
  }

  return answer;
}

module.exports = problem7;
