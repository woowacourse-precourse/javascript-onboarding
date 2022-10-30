function problem3(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(String(i).split(''));
  }
  const numberOfClaps = numbers
    .flat()
    .filter((e) => e === '3' || e === '6' || e === '9').length;

  return numberOfClaps;
}

module.exports = problem3;
