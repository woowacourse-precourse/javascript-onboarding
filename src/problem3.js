function problem3(number) {
  let count = 0;
  const condition = /3|6|9/g;
  for (let i = 1; i <= number; i += 1) {
    count += (String(i).match(condition) || []).length;
  }

  return count;
}

module.exports = problem3;
