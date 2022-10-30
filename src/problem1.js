//예외가 안날경우 비교해서 승자를 리턴하는 함수
function problem1(pobi, crong) {
  var answer;
  maxpobi = Maxnum(pobi);
  maxcrong = Maxnum(crong);
  if(checkpage(pobi) && checkpage(crong))
  {
    if(maxpobi > maxcrong){
      answer =1;
    } else if(maxcrong > maxpobi){
      answer =2;
    } else if(maxcrong === maxpobi){
      answer =0;
    }
  }
  else
    answer =-1;
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

//페이지 예외상황이 나는지 확인하는 함수
function checkpage(page) {
  if(page[1]-page[0] ===1 && page[0] >=1 && page[1] <=400)
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = problem1;
