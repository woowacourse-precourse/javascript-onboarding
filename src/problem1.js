function changeNumberToString(n){
  n=n.toString();
  return n;
}

function plus(n){
  let result=0;
  n = changeNumberToString(n);
  for(let i=0;i<n.length;i++){
      result+=parseInt(n[i]);
  }
  return result;
}

function problem1(pobi, crong) {
    let answer;
    return answer;
}
module.exports = problem1;
