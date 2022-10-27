function problem1(pobi, crong) {
  let answer;

  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);

  if (pobiMax === 0 || crongMax === 0) answer = -1;
  else if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else answer = 0;

  return answer;
}

function getMax(pages) {
  if (pages[0] + 1 !== pages[1]) return 0;
  let result = 0;

  pages.forEach((page) => {
    let sum = 0;
    let mul = 1;

    for (let c of page + "") {
      sum += +c;
      mul *= +c;
    }

    result = Math.max(result, sum, mul);
  });

  return result;
}

module.exports = problem1;
