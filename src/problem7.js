function problem7(user, friends, visitors) {
  var answer="";
  let per =[];
  let reco = [];
  for(let i=0; i<friends.length; i++){
    if(friends[i][1] == user ){
      per.push(friends[i][0]);
    }
    if(friends[i][0] == user ){
      per.push(friends[i][1]);
    }
  }
  for(let i=0; i<friends.length; i++){
    for(let j=0; j<per.length; j++){

      if(per[j] == friends[i][0]){
        let flag=0;
        for(k=0; k<reco.length; k++){
          if(friends[i][1] == reco[k][0]){
            reco[k][1]+=10;
            flag=1;
          }
        }
        if(flag==0)
        reco.push([friends[i][1],10]);
      }


      if(per[j] == friends[i][1]){
        let flag=0;
        for(k=0; k<reco.length; k++){
          if(friends[i][0] == reco[k][0]){
            reco[k][1]+=10;
            flag=1;
          }
        }
        if(flag==0)
        reco.push([friends[i][0],10]);
      }
    }
  }
  for(let i=0; i<visitors.length; i++){
    
  }
  return answer;
}

module.exports = problem7;
