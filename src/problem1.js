function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return -1;
  }
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) {
    return -1;
  }
  if (pobi[0] % 2 === 0 || crong[0] % 2 === 0) {
    return -1;
  }
  const pobiScore = Math.max.apply(
    null,
    pobi.map(pageNumber => getMaxNumber(pageNumber))
  );
  const crongScore = Math.max.apply(
    null,
    crong.map(pageNumber => getMaxNumber(pageNumber))
  );
  let answer = comparison(pobiScore, crongScore);

  return answer;
}

function comparison(pobiScore, crongScore) {
  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore === crongScore) {
    return 0;
  }
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

  return Math.max(sum, multiply);
}
module.exports = problem1;
