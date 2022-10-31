function problem1(pobi, crong) {
  const isInvalid = (pages) =>
    pages[1] - pages[0] !== 1 ||
    pages.length !== 2 ||
    pages[0] === 1 ||
    pages[1] === 400;
  const getMax = (a, b) => Math.max(a, b);
  const getResult = (num) => {
    const numStr = num
      .toString()
      .split("")
      .map((v) => Number(v));

    const addRes = numStr.reduce((prev, curr) => prev + curr, 0);
    const mulRes = numStr.reduce((prev, curr) => prev * curr, 1);

    return getMax(addRes, mulRes);
  };

  if (isInvalid(pobi) || isInvalid(crong)) return -1;

  const [pL, pR] = pobi;
  const [cL, cR] = crong;

  const pMax = getMax(getResult(pL), getResult(pR));
  const cMax = getMax(getResult(cL), getResult(cR));

  if (pMax > cMax) return 1;
  else if (pMax < cMax) return 2;
  else return 0;
}

module.exports = problem1;
