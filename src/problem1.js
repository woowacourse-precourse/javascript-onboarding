function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;
  
  if (pobiRight - pobiLeft !== 1 || crongRight - crongLeft !== 1) return -1;

  const sum = str => str.split('').map(v => +v).reduce((acc,cur) => acc+cur,0);
  const multiply = str => str.split('').map(v => +v).reduce((acc,cur) => acc*cur,1);

  const getMax = (left,right) => {
    const leftMax = Math.max(sum(String(left)),multiply(String(left)));
    const rightMax = Math.max(sum(String(right)),multiply(String(right)))
    return Math.max(leftMax, rightMax)
  }

  const pobiMax = getMax(pobiLeft,pobiRight)
  const crongMax = getMax(crongLeft,crongRight);

  return pobiMax > crongMax ? 1 : pobiMax < crongMax ? 2 : 0;
}

module.exports = problem1;
