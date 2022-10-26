function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  let pobiLeftSum = String(pobi[0]).split('').map(v => +v).reduce((acc,cur) => acc+cur,0);
  let pobiLeftSup = String(pobi[0]).split('').map(v => +v).reduce((acc,cur) => acc*cur,1);
  let pobiRightSum = String(pobi[1]).split('').map(v => +v).reduce((acc,cur) => acc+cur,0);
  let pobiRightSup = String(pobi[1]).split('').map(v => +v).reduce((acc,cur) => acc*cur,1);

  const pobiLeftMax = Math.max(pobiLeftSum,pobiLeftSup)
  const pobiRightMax = Math.max(pobiRightSum,pobiRightSup)

  const pobiMax = Math.max(pobiLeftMax,pobiRightMax);

  let crongLeftSum = String(crong[0]).split('').map(v => +v).reduce((acc,cur) => acc+cur,0);
  let crongLeftSup = String(crong[0]).split('').map(v => +v).reduce((acc,cur) => acc*cur,1);
  let crongRightSum = String(crong[1]).split('').map(v => +v).reduce((acc,cur) => acc+cur,0);
  let crongRightSup = String(crong[1]).split('').map(v => +v).reduce((acc,cur) => acc*cur,1);

  const crongLeftMax = Math.max(crongLeftSum,crongLeftSup)
  const crongRightMax = Math.max(crongRightSum,crongRightSup)

  const crongMax = Math.max(crongLeftMax,crongRightMax);

  return pobiMax > crongMax ? 1 : pobiMax < crongMax ? 2 : 0;
}

module.exports = problem1;
