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
  // 포비 왼쪽 페이지 번호 계산
  if (pobiScoreLeftSum > pobiScoreLeftMul) {
    pobiScoreLeft = pobiScoreLeftSum;
  } else {
    pobiScoreLeft = pobiScoreLeftMul;
  }
  // 포비 오른쪽 페이지 번호 계산
  if (pobiScoreRightSum > pobiScoreRightMul) {
    pobiScoreRight = pobiScoreRightSum;
  } else {
    pobiScoreRight = pobiScoreRightMul;
  }
  // 포비 최고 점수 계산
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
  // 크롱 왼쪽 페이지 번호 계산
  if (crongScoreLeftSum > crongScoreLeftMul) {
    crongScoreLeft = crongScoreLeftSum;
  } else {
    crongScoreLeft = crongScoreLeftMul;
  }
  // 크롱 오른쪽 페이지 번호 계산
  if (crongScoreRightSum > crongScoreRightMul) {
    crongScoreRight = crongScoreRightSum;
  } else {
    crongScoreRight = crongScoreRightMul;
  }
  // 크롱 최고 점수 계산
  if (crongScoreLeft > crongScoreRight) {
    crongScore = crongScoreLeft;
  } else {
    crongScore = crongScoreRight;
  }
  // 포비와 크롱의 최고 점수 비교
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

module.exports = problem1;
