function problem1(pobi, crong) {
  if (isException(pobi, crong)) return -1;

  const pobiLeftScore = maxScore(pobi[0]);
  const pobiRightScore = maxScore(pobi[1]);
  const pobiScore = Math.max(pobiLeftScore, pobiRightScore);

  const crongLeftScore = maxScore(crong[0]);
  const crongRightScore = maxScore(crong[1]);
  const crongScore = Math.max(crongLeftScore, crongRightScore);

  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else if (pobiScore === crongScore) return 0;
  return -1;
}

function isException(pobi, crong) {
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400)
    return true;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return true;
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  )
    return true;
  return false;
}

function maxScore(page) {
  pageStr = [...String(page)];

  const sum = pageStr.reduce((v, i) => {
    return v + Number(i);
  }, 0);

  const multifly = pageStr.reduce((v, i) => {
    return v * Number(i);
  }, 1);

  return Math.max(sum, multifly);
}

module.exports = problem1;
