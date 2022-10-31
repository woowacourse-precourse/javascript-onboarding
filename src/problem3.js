function problem3(number) {
  if (!Number.isInteger(number) || number < 1 || number > 1000) {
    return 0;
  }

  const numString = Array(number)
    .fill(1)
    .map((x, y) => x + y)
    .join('');

  const regExp = /3|6|9/g;
  const answer = numString.match(regExp).length;

  return answer;
}

module.exports = problem3;
