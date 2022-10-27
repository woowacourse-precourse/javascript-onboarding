function problem1(pobi, crong) {
  
  if(exception(pobi, crong) == false){  
    return -1;
  }
  
  const pobiLeftScore = Math.max(pageSum(pobi[0]),pageMul(pobi[0]));

  const pobiRightScore = Math.max(pageSum(pobi[1]),pageMul(pobi[1]));

  const crongLeftScore = Math.max(pageSum(crong[0]),pageMul(crong[0]));

  const crongRightScore = Math.max(pageSum(crong[1]),pageMul(crong[1]));

  const pobiScore = Math.max(pobiLeftScore, pobiRightScore);

  const crongScore = Math.max(crongLeftScore, crongRightScore);

  return ScoreResult(pobiScore,crongScore);
}

function pageSum(num){
  if (num >= 100){
    return parseInt(num / 100) + parseInt((num % 100) / 10) + parseInt(num % 10); 
 }
 return (parseInt(num / 10) + (num % 10));
}

function pageMul(num){
  if (num >= 100){
    return parseInt(num/100) * parseInt((num%100)/10) * (num % 10);
  }
  return (parseInt(num / 10) * (num % 10));
}

function exception(pobi,crong){
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1 ){
    return false;
  }
  if (pobi[1] > 400 || crong[1] > 400 || pobi[0] < 1 || crong[0] < 1){
    return false;
  }
  return true;
}

function ScoreResult(pobiScore, crongScore){
  if(pobiScore > crongScore){
    return 1;
  }
  if(pobiScore < crongScore){
    return 2;
  }
  if(pobiScore == crongScore){
    return 0;
  }
}

module.exports = problem1;
