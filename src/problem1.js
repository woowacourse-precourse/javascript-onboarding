function isValidPage(page) {
  if (
    page[1] - page[0] === 1 &&
    Math.max(...page) <= 400 &&
    Math.min(...page) >= 1 &&
    page[0] % 2 === 1 &&
    page[1] % 2 === 0
  )
    return true;
  else return false;
}

function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  const pobiMax = Math.max(
    ...pobi.map((page) =>
      Math.max(
        ...(page + "")
          .split("")
          .reduce((acc, cur) => [acc[0] + +cur, acc[1] * cur], [0, 1])
      )
    )
  );

  const crongMax = Math.max(
    ...crong.map((page) =>
      Math.max(
        ...(page + "")
          .split("")
          .reduce((acc, cur) => [acc[0] + +cur, acc[1] * cur], [0, 1])
      )
    )
  );

  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else return 0;
}

module.exports = problem1;
