function problem1(pobi, crong) {
  var answer;
  let pobilist,cronglist;
  
  for(let i=0; i<pobi;i++){
    let value1=pobi[i];
    let value2=crong[i];
    pobilist.push(add(value1));
    cronglist.push(add(value2));
    pobilist.push(mul(value1));
    cronglist.push(mul(value2));

    if((Math.min(cronglist)==0)|(Math.min(pobilist)==0)){
      answer=-1;
    }
    else{
      if(Math.max(cronglist)>Math.max(pobilist)){
        answer=2;
      }
      else if(Math.max(cronglist)<Math.max(pobilist)){
        answer=1;
      }
      else answer=0;
    }


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
}



module.exports =problem1;
