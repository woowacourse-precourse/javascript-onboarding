function problem3(number) {
  let count = 0;
  for (let i = 2; i <= number; i++) {
    let num = i;
    while (num > 2) {
      if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
        count++;
      }
      num = parseInt(num / 10);
    }
  }

  return count;
}

module.exports = problem3;
