function problem3(number) {
  const numString = Array(number)
    .fill(1)
    .map((x, y) => x + y)
    .join('');

  const regExp = /3|6|9/g;
  const answer = numString.match(regExp).length;

  return answer;
}

module.exports = problem3;
