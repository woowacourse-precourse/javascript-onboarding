function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i ++) {
    count += countMultiple3OfEachDigit(i)
  }

  return count;
}

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
