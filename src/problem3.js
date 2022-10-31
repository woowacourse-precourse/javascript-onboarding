function problem3(number) {
  let answer;
  return answer;
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
