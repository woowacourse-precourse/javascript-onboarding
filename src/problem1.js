function getMax(pages) {
  let result = 0;

  if (pages[0] + 1 !== pages[1]) return result;

  pages.forEach((page) => {
    let sum = Array.from(page + "").reduce((digit, acc) => +acc + +digit);
    let mul = Array.from(page + "").reduce((digit, acc) => +acc * +digit);

    result = Math.max(result, sum, mul);
  });

  return result;
}

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

module.exports = problem1;
