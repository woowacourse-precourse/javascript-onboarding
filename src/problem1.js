function problem1(pobi, crong) {
  var answer;
  pobiScore = 0;
  pobiScoreLeft = 0;
  pobiScoreLeftSum = 0;
  pobiScoreLeftMul = 1;
  pobiScoreRight = 0;
  pobiScoreRightSum = 0;
  pobiScoreRightMul = 1;
  pobiLeft = `${pobi[0]}`;
  pobiRight = `${pobi[1]}`;

  for (let i = 0; i < pobiRight.length; i++) {
    pobiScoreLeftSum += parseInt(pobiLeft[i]);
    pobiScoreLeftMul *= parseInt(pobiLeft[i]);
    pobiScoreRightSum += parseInt(pobiRight[i]);
    pobiScoreRightMul *= parseInt(pobiRight[i]);
  }
  if (pobiScoreLeftSum > pobiScoreLeftMul) {
    pobiScoreLeft = pobiScoreLeftSum;
  } else {
    pobiScoreLeft = pobiScoreLeftMul;
  }
  if (pobiScoreRightSum > pobiScoreRightMul) {
    pobiScoreRight = pobiScoreRightSum;
  } else {
    pobiScoreRight = pobiScoreRightMul;
  }
  if (pobiScoreLeft > pobiScoreRight) {
    pobiScore = pobiScoreLeft;
  } else {
    pobiScore = pobiScoreRight;
  }

  crongScore = 0;
  crongScoreLeft = 0;
  crongScoreLeftSum = 0;
  crongScoreLeftMul = 1;
  crongScoreRight = 0;
  crongScoreRightSum = 0;
  crongScoreRightMul = 1;
  crongLeft = `${crong[0]}`;
  crongRight = `${crong[1]}`;

  for (let i = 0; i < crongRight.length; i++) {
    crongScoreLeftSum += parseInt(crongLeft[i]);
    crongScoreLeftMul *= parseInt(crongLeft[i]);
    crongScoreRightSum += parseInt(crongRight[i]);
    crongScoreRightMul *= parseInt(crongRight[i]);
  }
  if (crongScoreLeftSum > crongScoreLeftMul) {
    crongScoreLeft = crongScoreLeftSum;
  } else {
    crongScoreLeft = crongScoreLeftMul;
  }
  if (crongScoreRightSum > crongScoreRightMul) {
    crongScoreRight = crongScoreRightSum;
  } else {
    crongScoreRight = crongScoreRightMul;
  }
  if (crongScoreLeft > crongScoreRight) {
    crongScore = crongScoreLeft;
  } else {
    crongScore = crongScoreRight;
  }

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}
problem1([97, 98], [197, 198]);

module.exports = problem1;
