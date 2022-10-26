function problem1(pobi, crong) {
  let answer;
  let pobiLeftSum = pobi[0]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let pobiRightSum = pobi[1]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let pobiLeftMulti = pobi[0]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let pobiRightMulti = pobi[1]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let crongLeftSum = crong[0]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let crongRightSum = crong[1]
    .toString()
    .split("")
    .reduce((x, y) => +x + +y, 0);

  let crongLeftMulti = crong[0]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let crongRightMulti = crong[1]
    .toString()
    .split("")
    .reduce((x, y) => +x * +y, 1);

  let pobiMax = Math.max(
    pobiLeftSum,
    pobiRightSum,
    pobiLeftMulti,
    pobiRightMulti
  );
  let crongMax = Math.max(
    crongLeftSum,
    crongRightSum,
    crongLeftMulti,
    crongRightMulti
  );

  if (
    pobi[0] + 1 == pobi[1] &&
    crong[0] + 1 == crong[1] &&
    pobi[0] > 1 &&
    pobi[0] < 400 &&
    pobi[1] > 1 &&
    pobi[1] < 400 &&
    crong[0] > 1 &&
    crong[0] < 400 &&
    crong[1] > 1 &&
    crong[1] < 400
  ) {
    if (pobiMax > crongMax) answer = 1;
    else if (pobiMax < crongMax) answer = 2;
    else if (pobiMax == crongMax) answer = 0;
  } else {
    return (answer = -1);
  }

  return answer;
}

module.exports = problem1;
