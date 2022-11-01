function problem7(user, friends, visitors) {
  var answer=new Array();
  var userfriend=new Array();
  var FtoF= new Array();
  var score=new Array();
  //친구 목록(userfriend)
  for(var i=0; i<friends.length; i++){
    if(friends[i].includes(user)){
      if(friends[i][0]==user) userfriend.push(friends[i][1]);
      else userfriend.push(friends[i][0]);
    }
  }

  for(var i=0; i<userfriend.length; i++){
    for(var j=0; j<friends.length; j++){
      if(friends[j].includes(userfriend[i])&&!friends[j].includes(user)){
        if(friends[j][0]==userfriend[i]) FtoF.push(friends[j][1]);
        else FtoF.push(friends[j][0]);
      }
    }
  }

  FtoF.sort();
  var count=1;
  for(var i=0; i<FtoF.length; i++){
    if(FtoF[i]==FtoF[i+1]){
      count++;
    }
    else{
      score.push({name:FtoF[i],score:count*10});
      count=1;
    } 
  }

  for(var i=0; i<visitors.length;i++){
    for(var j=0; j<score.length; j++){
      if(userfriend.includes(visitors[i])) break;
      if(visitors[i]==score[j].name){
        score[j].score++;
        break;
      } 
      else if(j==score.length-1){
        score.push({name:visitors[i],score:1});
        break;
      }
    }
  }
  score.sort((a,b)=>b.score-a.score);
  for(var i=0; i<5; i++){
    if(i==score.length) break;
    answer[i]=score[i].name;
  }

  return answer;
}

module.exports = problem7;
