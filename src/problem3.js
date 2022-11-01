function problem3(number) {
  var answer;
  answer=0
  for(var i=1;i<=number;i++){
    var num=i;
    while(parseInt(num/10)>0){
      if(num%10==3||num%10==6||num%10==9){
        
        answer=answer+1
      }
      num=parseInt(num/10)
      
    }
    
    if(num%10==3||num%10==6||num%10==9){
      
      answer=answer+1
    }
  }
  return answer;
}

module.exports = problem3;
