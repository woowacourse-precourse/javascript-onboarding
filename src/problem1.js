function problem1(pobi, crong) {
  var answer;
  return answer;
}
function sumDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
function multiplyDigits(number) {
  let multiple = 1;
  while (number > 0) {
    multiple *= number % 10;
    number = Math.floor(number / 10);
  }
  return multiple;
}
function compareNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
function getWinner(pobi, crong) {
  const pobiMax = compareNumber(sumDigits(pobi[0], multiplyDigits(pobi[1])));
  const crongMax = compareNumber(sumDigits(crong[0], multiplyDigits(crong[1])));
  if (pobiMax == crongMax) return 0;
  else if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return -1;
}
module.exports = problem1;
