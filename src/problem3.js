function problem3(number) {
  let count = 0;

  for (let i = 3; i <= number; i++) {
    String(i).split('').map(Number).forEach(number => {
      if ([3, 6, 9].includes(+number)) count++;
    });
  }
  return count;
}

module.exports = problem3;
