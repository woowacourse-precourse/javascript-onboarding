function problem1(pobi, crong) {
  let answer 
  //수를 뽑는 방법 
  let pobiNum1 = pobi[0].toString();
  let pobiNum2 = pobi[1].toString();
  let pobiBestNum = 0;
  let crongNum1 = crong[0].toString();
  let crongNum2 = crong[1].toString();

  //포비의 비교 숫자 구하는 방법
  let sum1 = 0;
  let sum2 = 0; 
  let mul1 =1;
  let mul2 =1; 
  
  for (let i = 0 ; i<pobiNum1.length ; i++) {
    sum1 = sum1 + parseInt(pobiNum1[i]);
    
  }
  for (let i =0 ; i<pobiNum2.length ; i++) {
    sum2 = sum2 +parseInt( pobiNum2[i])
  }
  for (let i =0 ; i<pobiNum1.length ; i++) {
    mul1 = mul1 * parseInt(pobiNum1[i])
  }
  for (let i =0 ; i<pobiNum2.length ; i++) {
    mul2 = mul2 * parseInt(pobiNum2[i])
  }
  
  let bestSum = 0;
  if ( sum1 > sum2) {
    bestSum = sum1;
  } else { bestSum = sum2} 
  
  let bestMul = 0; 
  if ( mul1 > mul2) {
    bestMul = mul1
  } else { bestMul = mul2}
 
  if ( bestSum > bestMul ) {
    pobiBestNum = bestSum
  } else if(bestSum === bestMul){
    pobiBestNum = bestSum
  }
  else {pobiBestNum = bestMul}
  
sum1 = 0;
sum2 =0;
mul1 =1;
mul2 =1;
  // 크롱의 비교 숫자 구하는 방법  
  for (let i =0 ; i<crongNum1.length ; i++) {
    sum1 = sum1 + parseInt(crongNum1[i])
  }
  for (let i =0 ; i<crongNum2.length ; i++) {
    sum2 = sum2 + parseInt(crongNum2[i])
  }
  for (let i =0 ; i<crongNum1.length ; i++) {
    mul1 = mul1 * parseInt(crongNum1[i])
  }
  for (let i =0 ; i<crongNum2.length ; i++) {
    mul2 = mul2 * parseInt(crongNum2[i])
   
  }
  
  if ( sum1 > sum2) {
    bestSum = sum1;
  } else { bestSum = sum2} 

  if ( mul1 > mul2) {
    bestMul = mul1
  } else { bestMul = mul2}


  let crongBestNum = 0; 
  if (bestSum > bestMul ) {
    crongBestNum = bestSum
  } else if(bestSum === bestMul){
    crongBestNum = bestSum}
    else {crongBestNum = bestMul}
    
  // 크롱과 포비 베스트 숫자 비교 
  if(parseInt(pobiNum2) - parseInt(pobiNum1) !== 1) {
    answer = -1;
  }else if(crongNum2- crongNum1 !==1) {
   answer = -1;
   } else if ( crongBestNum < pobiBestNum) {
    answer = 1; 
  } else if ( crongBestNum > pobiBestNum) {
    answer = 2;
  } else if(crongBestNum === pobiBestNum) {
   answer = 0;
  } 
    return answer;
    
}
module.exports = problem1;
