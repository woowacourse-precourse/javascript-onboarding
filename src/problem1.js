function problem1(pobi, crong) {
  var answer;
  return answer;
  if (pobi[0] % 2 === 0) {
    return -1
  }

const sumOfEachDigit = (num) => {
  let sum = 0
  while (num > 0) {
    let digit = num % 10
    num = (num - digit) / 10
    sum += digit
  }
  return sum
}

const multiplyOfEachDigit = (num) => {
  let mul = 1
  while (num > 0) {
    let digit = num % 10
    num = (num - digit) / 10
    mul *= digit
  }
  return mul
}

module.exports = problem1;
