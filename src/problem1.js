function problem1(pobi, crong) {
  let answer;

  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1] || pobi.length > 2 || crong.length > 2) {
    answer = -1;
  } else {
    let pobiResult = 0;
    let crongResult = 0;

    for (let i = 0; i < pobi.length; i++) {

      let pobiSum = 0;
      let pobiSum2 = 1;
      let crongSum = 0;
      let crongSum2 = 1;
      let pobiNum = pobi[i];
      let crongNum = crong[i];

      while (pobiNum > 0) {
        pobiSum += pobiNum % 10;
        pobiSum2 *= pobiNum % 10;
        pobiNum = Math.floor(pobiNum / 10);
      }
      pobiSum = pobiSum > pobiSum2 ? pobiSum : pobiSum2;

      while (crongNum > 0) {
        crongSum += crongNum % 10;
        crongSum2 *= crongNum % 10;
        crongNum = Math.floor(crongNum / 10);
      }
      crongSum = crongSum > crongSum2 ? crongSum : crongSum2;

      if (pobiResult < pobiSum) {
        pobiResult = pobiSum;
      }
      if (crongResult < crongSum) {
        crongResult = crongSum;
      }
    }

    if (pobiResult > crongResult) {
      answer = 1;
    } else if (pobiResult < crongResult) {
      answer = 2;
    } else {
      answer = 0;
    }
  }

  return answer;
}

module.exports = problem1;
