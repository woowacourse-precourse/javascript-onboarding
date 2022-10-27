function problem3(number) {
  return Array(number)
    .fill(number)
    .map((_, i) => i + 1 + '');
}

module.exports = problem3;
