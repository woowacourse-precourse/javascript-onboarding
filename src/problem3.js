function problem3(number) {
  if (!inputExecption(number)) return false;
    var answer;
    answer = clapCnt(number);
    return answer;
}

function inputExecption(num) {
  let inputCheck = true;
  if (num < 1 || num > 1000) inputCheck = false;
  if (num == null) inputCheck = false;
  return inputCheck;
}

function clapCnt(num) {
  let cnt = 0;
  for (i = 1; i <= num; i++) {
    let numberCompare = String(i).match(/[369]/g);
    if (numberCompare != null) cnt += numberCompare.length;
  }
  return cnt;
}

console.log(problem3(10000));
module.exports = problem3;