function createString(n){
  let s = '';
  for(let i=1;i<=n;i++){
      s+=i;
  }
  return s;
}
function findNumber(n){
  let result=0;
  for(let i=0;i<n.length;i++){
      if(n.charAt([i])==='3'){
          ++result;
      }
      if(n.charAt([i])==='6'){
          ++result;
      }
      if(n.charAt([i])==='9'){
          ++result;
      }
  }
  return result;
}


function problem3(number) {
  let answer;
  answer=findNumber(createString(number));

  return answer;
}

module.exports = problem3;