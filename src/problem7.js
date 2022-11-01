function problem7(user, friends, visitors) {
  var answer=[];
  var userFriends=[];
  let score= new Map();
  for(let i=0; i<friends.length;i++){

    if(score.has(friends[i][1])){
      score.set(friends[i][1], score.get(friends[i][1])+10);
    }
    else score.set(friends[i][1], 10);
    if(friends[i][1].includes(user)){
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
  score.forEach(function(value, key){
    answer.push(key);
  });

  return answer;
}
module.exports = problem7;
