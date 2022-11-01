function problem1(pobi, crong) {
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
