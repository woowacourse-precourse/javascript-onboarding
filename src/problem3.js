function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    count +=
      i.toString().split('3').length +
      i.toString().split('6').length +
      i.toString().split('9').length -
      3;
  }
  return count;
}

module.exports = problem3;
