function getClapNum(number){
  const clapArr = Array.from(number.toString(),(num) => Number(num)).reduce((acc,cur)=>{
    if(cur === 3 || cur === 6 || cur === 9){
      return [...acc, cur];
    }
    return acc;
  },[]);

  return clapArr.length;
}

function getEntireClapNum(number){
  let cnt = 0;

  for(let i=1; i<=number; i++){
    const clapNum = getClapNum(i);
    cnt = cnt + clapNum;
  }
  
  return cnt;
}

function problem3(number) {
  const answer = getEntireClapNum(number);
  
  return answer;
}

module.exports = problem3;
