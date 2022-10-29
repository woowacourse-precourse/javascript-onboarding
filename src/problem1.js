function problem1(pobi, crong) {
  let pobiScore = 0;
  let crongScore = 0;

  if (pobi[0] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[1] > 400) {
    return -1;
  }

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  pobiScore = Math.max(
    calculatePageScore(pobi[0]),
    calculatePageScore(pobi[1])
  );
  crongScore = Math.max(
    calculatePageScore(crong[0]),
    calculatePageScore(crong[1])
  );

  if (pobiScore > crongScore) {
    return 1;
  } else if (crongScore < pobiScore) {
    return 2;
  } else {
    return 0;
  }

  return 0;
}

function calculatePageScore(page) {
  let sumScore = 0;
  let multiplyScore = 1;
  let temp = 0;

  while (page > 0) {
    temp = page % 10;
    page = parseInt(page / 10);

    sumScore += temp;
    multiplyScore *= temp;
  }

  return Math.max(sumScore, multiplyScore);
}

module.exports = problem1;
