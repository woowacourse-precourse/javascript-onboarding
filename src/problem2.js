function sol(n){
  let result=[];
  let point=0;
  result[0]=n[0];

  for(let i=1;i<n.length;i++){
    if(n[i]==result[point]){
      point=point-1;
    }
    else{
      point=point+1;
      result[point]=n[i];
    }
  }
  return result.slice(0,point+1);
}
function problem2(cryptogram) {
  let answer;
  answer=sol(cryptogram);

  return answer.join('');
}


module.exports = problem2;