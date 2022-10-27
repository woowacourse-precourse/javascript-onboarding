function problem3(number) {
  return Array(number)
    .fill(number)
    .map((_, i) => i + 1 + '')
    .join('')
    .split('')
    .filter((v) => v === '3' || v === '6' || v === '9').length;
}

module.exports = problem3;
