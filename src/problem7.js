function problem7(user, friends, visitors) {
  var answer;

  var already=[]
  var newfriend=[]
  
  for(var i=0;i<friends.length;i++){
    
    if(friends[i][0]==user){
      
      already.push(friends[i][1])
    }
    
    if(friends[i][1]==user){
      
      already.push(friends[i][0])
    }
  }
  var set = new Set(already);
  already= [...set];
  


  for(var i=0;i<friends.length;i++){
   
    if(already.includes(friends[i][0])){
      
      if(friends[i][1]!=user&&!(already.includes(friends[i][1]))){
        if(!(newfriend.includes(friends[i][0]))){
        newfriend.push(friends[i][1])
      }
        
      }
    }
    if(already.includes(friends[i][1])){
      if(friends[i][0]!=user&&!(already.includes(friends[i][0]))){
        if(!(newfriend.includes(friends[i][1]))){
          
        newfriend.push(friend[i][0])
        }
        
      }
    }
    
  }


  set = new Set(newfriend);
  newfriend= [...set];
  var score=[]

  for(var i=0;i<newfriend.length;i++){
    score.push(0)
  }
  for(var i=0;i<friends.length;i++){
    if(already.includes(friends[i][0])){
      if(friends[i][1]!=user&&!(already.includes(friends[i][1]))){

        var d=newfriend.indexOf(friends[i][1])
        score[d]=score[d]+10
      }
    }
    else if(already.includes(friends[i][1])){
      if(friends[i][0]!=user&&!(already.includes(friends[i][0]))){

        var d=newfriend.indexOf(friends[i][0])
        score[d]=score[d]+10
      }
    }
  }

  for(var i=0;i<visitors.length;i++){
    if(!(already.includes(visitors[i]))&&!(newfriend.includes(visitors[i]))){
      
      newfriend.push(visitors[i])
      score.push(1)
    }
    else if(newfriend.includes(visitors[i])){
      var d=newfriend.indexOf(visitors[i])
      
      score[d]++;
    }
  }
  var answer=[]
  for(var i=0;i<5;i++){
    var maxsum=0;
    var maxname=""
    var maxindex=0;
    for(var a=0;a<newfriend.length;a++){ 
      if(score[a]>maxsum){
        maxsum=score[a];
        maxname=newfriend[a];
        maxindex=a;
      }
      else if(score[a]==maxsum){
        if(newfriend[a]<maxname){
          maxname=newfriend[a]
          maxindex=a;
        }
      }

    }
    
    delete(newfriend[maxindex])
    delete(score[maxindex])
    answer.push(maxname)
  }
  if(newfriend.length<5){
    answer=answer.slice(0,newfriend.length)
  }
  

  return answer;
}

console.log(problem7("mrko",([ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]]),["bedi", "bedi", "donut", "bedi", "shakevan"]))
module.exports = problem7;
