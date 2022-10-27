function problem1(pobi, crong) {
  let answer;
  const pobiScore = Math.max.apply(
    null,
    pobi.map((pageNumber) => getMaxNumber(pageNumber))
  );
  const crongScore = Math.max.apply(
    null,
    crong.map((pageNumber) => getMaxNumber(pageNumber))
  );

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  }

  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    answer = -1;
  }
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) {
    answer = -1;
  }

  return answer;
}

function getMaxNumber(value) {
  const sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce((total, current) => total + current, 0);
  const multiply = value
    .toString()
    .split('')
    .map(Number)
    .reduce((total, current) => total * current, 1);
  const max = Math.max(sum, multiply);

  return max;
}
module.exports = problem1;
