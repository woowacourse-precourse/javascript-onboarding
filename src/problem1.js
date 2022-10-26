function problem1(pobi, crong) {
  const LENGTHLIMIT = 2;
  const RIGHTPAGE = 1;
  const LEFTPAGE = 0;
  const BOTHENDPAGES = [1, 2, 399, 400];
  const pobiMaxV = getMaxV(pobi);
  const crongMaxV = getMaxV(crong);

  if (isInvalidInput(pobi, crong)) return -1;
  if(pobiMaxV === crongMaxV) return 0;
  switch (pobiMaxV > crongMaxV) {
    case true:
      return 1;
    case false:
      return 2;
  }

  function getMaxV(pobi){
    const values = pobi.map((pageNum) => {
      let sum = String(pageNum).split('').reduce((a,b) => Number(a) + Number(b), 0)
      let mul = String(pageNum).split('').reduce((a,b) => Number(a) * Number(b))
      return Math.max(sum, mul)
    })
    return Math.max(...values);
  }

  function isInvalidInput(pobi, crong) {
    const condition1 = hasBothEndsPage(pobi, crong);
    const condition2 = hasWrongLength(pobi, crong);
    const condition3 = hasWrongPage(pobi, crong);
    return condition1 || condition2 || condition3;
  }

  function hasBothEndsPage(pobiPage, crongPage) {
    return !!BOTHENDPAGES.filter((v) => (pobiPage.concat(crongPage).includes(v))).length;
  }

  function hasWrongLength(pobiPage, crongPage) {
    const TOTALPAGES = pobiPage.concat(crongPage);
    return TOTALPAGES.length !== LENGTHLIMIT * 2;
  }

  function hasWrongPage(pobi, crong) {
    const rightOrder = 2 !== (pobi[RIGHTPAGE] - pobi[LEFTPAGE]) + (crong[RIGHTPAGE] - crong[LEFTPAGE]);
    const evenCheck = 0 !== pobi[RIGHTPAGE]%2 + crong[RIGHTPAGE]%2;
    return rightOrder || evenCheck
  }
}

// module.exports = problem1;
