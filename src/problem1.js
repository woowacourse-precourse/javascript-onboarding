function findplus(sum){
  var ans=0
  var num=[]
  var count=0;
  while(sum/10>0){
    num.push(parseInt(sum%10))
    sum=parseInt(sum/10)
    count++;
  }
  num.push(sum)
  for(var i=0;i<count;i++){
    ans=ans+num[i]
  }
  return ans;
}
function findproduct(sum){
  var ans=1
  var num=[]
  var count=0;
  while(sum/10>0){
    num.push(parseInt(sum%10))
    sum=parseInt(sum/10)
    count++;
  }
  num.push(sum)
  for(var i=0;i<count;i++){
    ans=ans*num[i]
  }
  return ans;
}

function problem1(pobi, crong) {
  var answer;

  if(pobi[1]-pobi[0]!=1||crong[1]-crong[0]!=1){
    answer=-1
    return answer
  }
  var pobimax=Math.max(findplus(pobi[0]),findplus(pobi[1]),findproduct(pobi[0]),findproduct(pobi[1]))
  var crongmax=Math.max(findplus(crong[0]),findplus(crong[1]),findproduct(crong[0]),findproduct(crong[1]))
  if(pobimax>crongmax){
    answer=1
  }
  else if(pobimax<crongmax){
    answer=2
  }
  else if(pobimax==crongmax){
    answer=0
  }
  
  return answer;
}


module.exports = problem1;
