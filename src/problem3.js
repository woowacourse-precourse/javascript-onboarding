function problem3(number) {
  const claps = Array(number)
    .fill('')
    .reduce((a, _, i) => (a += count369(i + 1).length), 0);

  return claps;
}

const count369 = (num) =>
  [...String(num)].filter((digit) => ['3', '6', '9'].includes(digit));

module.exports = problem3;
