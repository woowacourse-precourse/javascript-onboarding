function problem7(user, friends, visitors) {
  let answer;
  let id_obj = {};
  let scores = {};
  for (let i=0; i<friends.length; i++){
      for (let j=0; j<2; j++){
        id_obj.hasOwnProperty(friends[i][j])
        ?id_obj[friends[i][j]].push(friends[i][1-j])
        :id_obj[friends[i][j]]=[friends[i][1-j]]
      }
  }
  for (let name, i=0; i<id_obj[user].length; i++){
      name = id_obj[user][i];
      for (j=0; j<id_obj[name].length; j++){
          id_obj[name][j]!==user&&
          (scores.hasOwnProperty(id_obj[name][j])
          ?scores[ id_obj[name][j] ]+=10
          :scores[ id_obj[name][j] ]=10);
      }
  }
  for (i=0; i<visitors.length; i++){
    if (scores.hasOwnProperty(visitors[i])){
        scores[ visitors[i] ]+=1;
    }
    else if(!id_obj.hasOwnProperty(visitors[i])){
        scores[ visitors[i] ]=1;
    }
  }
  answer = Object.keys(scores)
  .sort((a,b)=>{
      if(scores[a]===scores[b]) {
        return a<b?-1:a>b?1:0;
      }
      return scores[b]-scores[a];
  });
  
  return answer;
}

module.exports = problem7;
