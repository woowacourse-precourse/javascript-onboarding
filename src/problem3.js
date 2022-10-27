function problem3(number) {
  return Array(number)
    .fill(number)
    .map((_, i) => i + 1 + '')
    .join('');
}

module.exports = problem3;
