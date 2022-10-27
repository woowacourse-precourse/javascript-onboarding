function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let str = String(i).split('');
    for (const char of str) {
      if (char === '3' || char === '6' || char === '9') {
        count += 1;
      }
    }
  }

  return count;
}

module.exports = problem3;
