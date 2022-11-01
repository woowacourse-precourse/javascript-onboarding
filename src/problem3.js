function problem3(number) {
  let count = 0;
  n = number.split()

  for (let loop=0; loop < n.length; loop++) {
    if (n[loop] === 3 || 6 || 9) {
      count++
    };
  }

  return count;
}

module.exports = problem3;
