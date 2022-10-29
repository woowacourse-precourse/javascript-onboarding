function problem1(pobi, crong) {
  let answer;

  // pobi
  let pobiLeft = String(pobi[0]);
  let pobiLeftResult = 0;
  let pobiRight = String(pobi[1]);
  let pobiRightResult = 0;

  let pobiResult;

  for (let i = 0; i < pobiLeft.length; i++) {
    let a = 0;
    let b = 0;

    a += parseInt(pobiLeft[i]);
    b *= parseInt(pobiLeft[i]);

    if (a > b) {
      pobiLeftResult = a;
    } else {
      pobiLeftResult = b;
    }
  };

  for (let i = 0; i < pobiRight.length; i++) {
    let a = 0;
    let b = 0

    a += parseInt(pobiRight[i]);
    b *= parseInt(pobiRight[i]);

    if (a > b) {
      pobiRightResult = a;
    } else {
      pobiRightResult = b;
    }
  };

  if (pobiLeftResult > pobiRightResult) {
    pobiResult = pobiLeftResult;
  } else {
    pobiResult = pobiRightResult;
  };


  // crong
  let crongLeft = String(crong[0]);
  let crongLeftResult = 0;
  let crongRight = String(crong[1]);
  let crongRightResult = 0;

  let crongResult;

  for (let i = 0; i < crongLeft.length; i++) {
    let a = 0;
    let b = 0;

    a += parseInt(crongLeft[i]);
    b *= parseInt(crongLeft[i]);

    if (a > b) {
      crongLeftResult = a;
    } else {
      crongLeftResult = b;
    }
  };

  for (let i = 0; i < crongRight.length; i++) {
    let a = 0;
    let b = 0;

    a += parseInt(crongRight[i]);
    b *= parseInt(crongRight[i]);

    if (a > b) {
      crongRightResult = a;
    } else {
      crongRightResult = b;
    }
  };

  if (crongLeftResult > crongRightResult) {
    crongResult = crongLeftResult
  } else {
    crongResult = crongRightResult
  }

  // 결과 도출
  if (pobiResult > crongResult) {
    answer = 1;
  } else if (crongResult > pobiResult) {
    answer = 2;
  } else if (crongResult == pobiResult) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
