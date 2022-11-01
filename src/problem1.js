const numOfPages = 400;

function getDigitSum(n) {
  let isPossible = true;
  let plusRet = 0;
  let multiRet = 1;
  while (n > 0) {
    const digit = n % 10;
    if(digit < 1 || digit > numOfPages){
      isPossible = false;
      break;
    }
    plusRet += digit;
    multiRet *= digit;
    n = Math.floor(n / 10);
  }
  if(isPossible){
    return Math.max(plusRet, multiRet);
  }
  return -1;
}

function problem1(pobi, crong) {
  let temp = 0;
  let isPossible = true;
  let pobiScore = 0;
  let crongScore = 0;

  for(let i=0; i<2; i++){
    temp = getDigitSum(pobi[i]);
    if(temp < 0){
      isPossible = false;
      break;
    }
    pobiScore = Math.max(pobiScore, temp);

    temp = getDigitSum(crong[i]);
    if(temp < 0){
      isPossible = false;
      break;
    }
    crongScore = Math.max(crongScore, temp);
  }
  
  if(!isPossible){
    return -1;
  }
  if(pobiScore > crongScore) {
    return 1;
  }else if(pobiScore < crongScore) {
    return 2;
  }else{
    return 0;
  }
}

module.exports = problem1;