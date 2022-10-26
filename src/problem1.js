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

function exceptionCheck(pages) {
  if (pages[0] <= 1 || pages[1] >= 400) return false;
  else if (pages[1] - pages[0] !== 1) return false;
  else return true;
}

module.exports = problem1;
