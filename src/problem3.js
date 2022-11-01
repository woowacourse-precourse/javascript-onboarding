function problem3(number) {
  var answer;
  return answer;
const countMultiple3OfEachDigit = (num) => {
  let count = 0
  while (num > 0) {
    let digit = num % 10
    num = (num - digit) / 10
    if (digit === 3 || digit === 6 || digit === 9) {
      count += 1
    }
  }
  return count
}

module.exports = problem3;
