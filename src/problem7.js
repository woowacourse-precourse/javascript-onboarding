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


  return answer;
}
module.exports = problem7;
