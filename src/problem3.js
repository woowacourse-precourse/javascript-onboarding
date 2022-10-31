function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let digits = String(i).split('');
    digits.forEach((digit) => {
      if (digit === '3' || digit === '6' || digit === '9') count += 1;
    });
  }

  return count;
}

module.exports = problem3;
