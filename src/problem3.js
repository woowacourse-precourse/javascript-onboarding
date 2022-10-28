function problem3(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(String(i).split(''));
  }
  return numbers.flat().filter((e) => e === '3' || e === '6' || e === '9')
    .length;
}

module.exports = problem3;
