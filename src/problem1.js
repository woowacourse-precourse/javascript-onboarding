function problem1(pobi, crong) {
  var answer;
  return answer;
}

//왼쪽 오른쪽중에 가장큰값을 리턴하는 함수
function Maxnum(page) {
  let max=[];
  for(i=0; i<2; i++)
  {
    max.push(String(page[i]).split('').map(Number).reduce((a,b)=> (a*b)));
    max.push(String(page[i]).split('').map(Number).reduce((a,b)=> (a+b)));
  };
  const maxnum = Math.max.apply(null, max);
  return maxnum;
  
}

module.exports = problem1;
