function checkBigNum (num) {
  let str = String(num);
  let sum = 0;
  let multiply = 1;
  for(let i = 0; i < str.length; i++){
    sum += Number(str[i]);
    multiply *= Number(str[i]);
  }
  return sum,multiply;
}

function getBiggerNum (arr) {
  let bigNum = [];
  bigNum.push(checkBigNum(arr[0]));
  bigNum.push(checkBigNum(arr[1]));
  bigNum.sort((a,b)=>b-a);
  console.log(bigNum)
  return bigNum[0];
}

function problem1(pobi, crong) {
  let isRestrictions = false;
  
  if(pobi.length!==2 || crong.length!==2){
    isRestrictions = true;
  } else if(pobi.includes(1)||pobi.includes(400)||crong.includes(1)||crong.includes(400)){
    isRestrictions = true;
  } else if(pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
    isRestrictions = true;
  }

  if (isRestrictions){
    return -1;
  } 
  else {
    let answer;
    const [pobiNum, crongNum] = [getBiggerNum(pobi),getBiggerNum(crong)];
    
    if (pobiNum===crongNum){
      answer = 0;
    } else if (pobiNum>crongNum) {
      answer = 1;
    } else if (pobiNum<crongNum) {
      answer = 2;
    } else {
      answer = -1;
    }
    return answer;
  }
}

module.exports = problem1;
