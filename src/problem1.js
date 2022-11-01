function problem1(pobi, crong) {
  var answer;
  let pobilist=[];
  let cronglist=[];


  const add= (num) =>{
    value= parseInt(num/100) +parseInt(num%100/10) +parseInt(num%10);
    return (value);
  }
  const mul=(num) =>{
    if(num>99){
      value=parseInt(num/100)*parseInt(num%100/10)*(num%10);
    }
    else value=parseInt(num/10)*(num%10);
    return (value);
  }

  for(let i=0; i<pobi.length;i++){
    pobilist[i]=add(pobi[i]);
    cronglist[i]=add(crong[i]);
    pobilist[i+2]=mul(pobi[i]);
    cronglist[i+2]=mul(crong[i]);
  }
  

  if((Math.min(...cronglist)==0)|(Math.min(...pobilist)==0)){
      answer=-1;
    }
  else{
      if(Math.max(...cronglist)>Math.max(...pobilist)){
        answer=2;
      }
      else if(Math.max(...cronglist)<Math.max(...pobilist)){
        answer=1;
      }
      else if(Math.max(...cronglist)==Math.max(...pobilist)) {
        answer=0;
      }
    
    
    
    
  }
  return answer;
}

module.exports =problem1;



