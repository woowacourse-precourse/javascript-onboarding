function find_max(arr){
  let ans=[]
  var ans_add
  var ans_mul
  var rest
  for(var i=0;i<2;i++){
      ans_add=0
      ans_mul=1
      while (arr[i]!=0){
          rest=arr[i]%10
          ans_add+=rest
          ans_mul*=rest
          arr[i]=parseInt(arr[i]/10)
      }
      ans.push(ans_mul)
      ans.push(ans_add)
  }
  return (Math.max(...ans))
}


function problem1(pobi, crong) {
  var answer;
  let error=0
  if ((pobi[1]-pobi[0])!==1 || (crong[1]-crong[0])!==1){
    error=1
  }
  if (pobi[0]%2==0 || pobi[1]%2!==0 || crong[0]%2==0 || crong[1]%2!==0 ){
    error=1
  }
  if (error==1){
    answer=(-1)
  }
  else{
  ans_pobi=find_max(pobi)
  ans_crong=find_max(crong)
  if (ans_pobi>ans_crong){
    answer=1
  }
  else if (ans_crong>ans_pobi){
    answer=2
  }
  else{
    answer=0
  }
}
  return answer;
}

module.exports = problem1;


