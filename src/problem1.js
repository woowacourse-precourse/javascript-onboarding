function problem1(pobi, crong) {
  if (pobi.length !== 2 || crong.length !== 2)
    throw new RangeError("pobi, crong의 길이는 2 여야 합니다.");

  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if (pobiRight - pobiLeft !== 1 || crongRight - crongLeft !== 1) return -1;

  const getMax = (left, right) => {
    const sum = (num) => [...(num + '')].reduce((acc, cur) => acc + (+cur), 0);

    const multiply = (num) => [...(num + '')].reduce((acc, cur) => +acc * (+cur), 1);

    const leftMax = Math.max(sum(left), multiply(left));
    const rightMax = Math.max(sum(right), multiply(right));

    return Math.max(leftMax, rightMax);
  };

  const pobiMax = getMax(pobiLeft, pobiRight);
  const crongMax = getMax(crongLeft, crongRight);

  return pobiMax > crongMax ? 1 : pobiMax < crongMax ? 2 : 0;
}

module.exports = problem1;
