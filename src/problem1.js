function changeNumberToString(n){
  n=n.toString();
  return n;
}

function plusPageNumber(n){
  let result=0;
  n = changeNumberToString(n);
  for(let i=0;i<n.length;i++){
      result+=parseInt(n[i]);
  }
  return result;
}
function mutiplyPageNumber(n){
  let result=1;
  n = changeNumberToString(n);
  for(let i=0;i<n.length;i++){
      result*=parseInt(n[i]);
  }
  return result;
}
function compareScore(a,b){
  if(a>b){
    return 1;
  }
  if(a<b){
    return 2;
  }
  if(a==b){
    return 0;
  }
}
function problem1(pobi, crong) {
    let answer;
    return answer;
}
module.exports = problem1;
