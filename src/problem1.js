function problem1(pobi, crong) {
  const pobiLeftPage = pobi[0].toString().split("");
  const pobiRightPage = pobi[1].toString().split("");
  const crongLeftPage = crong[0].toString().split("");
  const crongRightPage = crong[1].toString().split("");

  const pobiLeftSum = pobiLeftPage.reduce(
    (sum, current) => parseInt(sum) + parseInt(current),
    0
  );
  const pobiLeftMulti = pobiLeftPage.reduce(
    (muti, current) => parseInt(muti) * parseInt(current),
    1
  );

  const pobiRightSum = pobiRightPage.reduce(
    (sum, current) => parseInt(sum) + parseInt(current),
    0
  );

  const pobiRightMulti = pobiRightPage.reduce(
    (muti, current) => parseInt(muti) * parseInt(current),
    1
  );

  const crongLeftSum = crongLeftPage.reduce(
    (sum, current) => parseInt(sum) + parseInt(current),
    0
  );

  const crongLeftMulti = crongLeftPage.reduce(
    (muti, current) => parseInt(muti) * parseInt(current),
    1
  );

  const crongRightSum = crongRightPage.reduce(
    (sum, current) => parseInt(sum) + parseInt(current),
    0
  );

  const crongRightMulti = crongRightPage.reduce(
    (muti, current) => parseInt(muti) * parseInt(current),
    1
  );

  const pobiScore = Math.max(
    pobiLeftSum,
    pobiLeftMulti,
    pobiRightSum,
    pobiRightMulti
  );
  const crongScore = Math.max(
    crongLeftSum,
    crongLeftMulti,
    crongRightSum,
    crongRightMulti
  );

  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore == crongScore) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = problem1;
