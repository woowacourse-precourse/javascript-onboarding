function problem3(number) {
  let result = 0;
  let current = 1;
  while (current <= number) {
    const currentString = String(current);
    result += currentString.match(/[369]/g)?.length || 0;
    current++;
  }
  return result;
}

module.exports = problem3;
