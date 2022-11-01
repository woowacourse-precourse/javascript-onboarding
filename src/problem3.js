function problem3(number) {
  let clapCnt = 0;
  for (let i = 1; i <= number; i++) {
    clapCnt += countClap(splitNum(i));
  }
  return clapCnt;
}
function splitNum(num) {
  let splitNumArr = num.toString().split("");
  return splitNumArr;
}
function countClap(splitNumArr) {
  let clapCnt = 0;
  for (let i = 0; i < splitNumArr.length; i++) {
    if (splitNumArr[i] % 3 === 0 && splitNumArr[i] !== "0") clapCnt++;
  }
  return clapCnt;
}
module.exports = problem3;
