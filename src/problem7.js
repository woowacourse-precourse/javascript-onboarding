function problem7(user, friends, visitors) {

  let answer = []
  let score_dic = {}

  let neighbor = []
  for(let i=0; i<friends.length; i++){
    if(friends[i][1] == "mrko"){
      neighbor.push(friends[i][0]);
    }
  }

  for(let j=0; j<friends.length; j++){
    for(let k=0; k<neighbor.length; k++){
      if(friends[j][0] === neighbor[k]){
          score_dic[friends[j][1]] = 10;
      }
    }
  }

  for(let j=0; j<visitors.length; j++){
    if(visitors[j] in score_dic){
      score_dic[visitors[j]] += 1;
    }
    else{
      score_dic[visitors[j]] = 1;
    }
  }
  for(let i=0; i<neighbor.length; i++){
    delete score_dic[neighbor[i]];
  }

  delete score_dic[user]

  for (var key in score_dic) {
    answer.push(key);
  }

  return answer;
}

module.exports = problem7;
