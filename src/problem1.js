function getPageSum(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}

function getPageMulti(num) {
  let result = 1;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    result *= parseInt(num[i]);
  }
  return result;
}

function compareNum(num1, num2) {
  return Math.max(num1, num2);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}
module.exports = problem1;
