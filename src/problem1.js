function problem1(pobi, crong) {
  var answer;
  return answer;
}

function pageScore(page) {
  const result = page
    .toString()
    .split('')
    .reduce(
      (acc, cur) => {
        acc[0] += Number(cur);
        acc[1] *= Number(cur);
        return acc;
      },
      [0, 1]
    );

  return Math.max(result[0], result[1]);
}

module.exports = problem1;
