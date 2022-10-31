function problem1(pobi, crong) {
  // 예외사항일 경우 -1 return
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  let answer;
  // pobi의 최대 값을 구함
  const pobiMax = Math.max(
    sumOfDigits(pobi[0]),
    sumOfDigits(pobi[1]),
    mulOfDigits(pobi[0]),
    mulOfDigits(pobi[1])
  );
  // crong의 최대 값을 구함
  const crongMax = Math.max(
    sumOfDigits(crong[0]),
    sumOfDigits(crong[1]),
    mulOfDigits(crong[0]),
    mulOfDigits(crong[1])
  );
  if (crongMax > pobiMax) answer = 2;
  else if (pobiMax > crongMax) answer = 1;
  else answer = 0;
  return answer;
}
// 숫자 num의 각 자리수의 합을 구하는 함수
function sumOfDigits(num) {
  let sum = 0;
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}
// 숫자 num의 각 자리수의 곱을 구하는 함수
function mulOfDigits(num) {
  let sum = 1;
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    sum *= Number(num[i]);
  }
  return sum;
}
module.exports = problem1;
