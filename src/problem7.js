function problem7(user, friends, visitors) {
  var answer = [];
  let friendScore = {}
  let userFriend = []
  for (let i = 0; i<visitors.length; i++){
    if(visitors[i] in friendScore == false){
      friendScore[visitors[i]] = 1
    }
    else if (visitors[i] in friendScore == true){
      friendScore[visitors[i]]+=1
    }
  }
  for (let j = 0; j<friends.length; j++){
    for (let k = 0;k<friends[k].length; k++){
      if (friends[j][k] == user){
        userFriend.push(friends[j][(k+1)%2])
      }
    }
  }
  for (let p = 0; p<friends.length; p++){
    for (let q = 0; q<friends[p].length;q++){
      if (userFriend.includes(friends[p][q]) == true){
        if(friends[p][(q+1)%2] in friendScore == false){
          friendScore[friends[p][(q+1)%2]] = 10
        }
        else if (friends[p][(q+1)%2] in friendScore == true){
          friendScore[friends[p][(q+1)%2]]+=10
        }
      }
    }
  }

  return answer;
}
module.exports = problem7;

