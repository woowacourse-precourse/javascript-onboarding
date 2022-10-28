function problem1(pobi, crong) {
  var answer;
  return answer;
}

function sumDigits(num) {
  let sumResult = 0;
  while (num > 0) {
    sumResult += num % 10;
    num = parseInt(num / 10);
  }

  return sumResult;
}

module.exports = problem1;
