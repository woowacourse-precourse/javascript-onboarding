function problem1(pobi, crong) {
  var answer;
  
    const add= (num) =>{
      answer= num/100 +num%100/10 +num%10;
      return answer;
    }
    const mul=(num) =>{
      if( num>99){
        answer=(num/100)*(num%100/10)*(num%10);
      }
      else answer=(num/10)*(num%10);
      return answer;
    }
    
  }
  return answer;




module.exports =problem1;
