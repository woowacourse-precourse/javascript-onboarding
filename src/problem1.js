function problem1(pobi, crong) {
  //수를 뽑는 방법 
  const pobiNum1 = pobi[0];
  const pobiNum2 = pobi[1];
  const crongNum1 = crong[0];
  const crongNum2 = crong[1];
  //포비의 비교 숫자 구하는 방법
  const sum1 = 0;
  const sum2 = 0; 
  const mul1 =1;
  const mul2 =1; 
  for (let i =0 ; i<pobiNum1.length ; i++) {
    sum1 = sum1 + pobiNum1[i]
  }
  for (let i =0 ; i<pobiNum2.length ; i++) {
    sum2 = sum2 + pobiNum2[i]
  }
  for (let i =0 ; i<pobiNum1.length ; i++) {
    mul1 = mul1 * pobiNum1[i]
  }
  for (let i =0 ; i<pobiNum2.length ; i++) {
    mul2 = mul2 * pobiNum2[i]
  }
  

  // 크롱의 비교 숫자 구하는 방법  

  var answer;
  return answer;
}

module.exports = problem1;
