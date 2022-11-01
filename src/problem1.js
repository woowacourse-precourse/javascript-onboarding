function problem1(pobi, crong) {
  var answer;

  const pages = ([pobiLeft, pobiRight, crongLeft, crongRight] = [
    ...pobi,
    ...crong,
  ]);

  pages.forEach((v) => {
    if (typeof v !== 'number') return -1;
    if (v < 1 || v > 400) return -1;
  });

  if (pobiRight - pobiLeft !== 1 || crongRight - crongLeft !== 1) return -1;

  function plusMax(page) {
    return String(page)
      .split('')
      .map((v) => Number(v))
      .reduce((acc, cur) => acc + cur);
  }
  function multiMax(page) {
    return String(page)
      .split('')
      .map((v) => Number(v))
      .reduce((acc, cur) => acc * cur);
  }
  function decideMaxScore(left, right) {
    const leftMax = Math.max(plusMax(left), multiMax(left));
    const rightMax = Math.max(plusMax(right), multiMax(right));
    return Math.max(leftMax, rightMax);
  }

  let pobiMaxScore = decideMaxScore(pobiLeft, pobiRight);
  let crongMaxScore = decideMaxScore(crongLeft, crongRight);

  answer =
    pobiMaxScore > crongMaxScore ? 1 : pobiMaxScore < crongMaxScore ? 2 : 0;
  return answer;
}

module.exports = problem1;
