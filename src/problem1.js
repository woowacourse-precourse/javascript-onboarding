function problem1(pobi, crong) {
  var answer;
  let pobiArr = new Array(2);
  let pobiPlus = -1;
  let pobiMulti = -1;
  let pobiMax;
  let crongArr = new Array(2);
  let crongPlus = -1;
  let crongMulti = -1;
  let crongMax;
  let pobiPlusTmp;
  let crongPlusTmp;
  let pobiMultiTmp;
  let crongMultiTmp;

  if (
    pobi.length == 2 &&
    crong.length == 2 &&
    pobi[0] == pobi[1] - 1 &&
    crong[0] == crong[1] - 1
  ) {
    for (var i = 0; i < 2; i++) {
      pobiArr[i] = String(pobi[i]).split("");
      crongArr[i] = String(crong[i]).split("");
    }
    // console.log(pobiArr, crongArr);

    for (var i = 0; i < 2; i++) {
      pobiPlusTmp = 0;
      pobiMultiTmp = 1;
      for (var num of pobiArr[i]) {
        pobiPlusTmp += parseInt(num);
        pobiMultiTmp *= parseInt(num);
      }
      if (pobiPlus < pobiPlusTmp) pobiPlus = pobiPlusTmp;
      if (pobiMulti < pobiMultiTmp) pobiMulti = pobiMultiTmp;
      crongPlusTmp = 0;
      crongMultiTmp = 1;
      for (var num of crongArr[i]) {
        crongPlusTmp += parseInt(num);
        crongMultiTmp *= parseInt(num);
      }
      if (crongPlus < crongPlusTmp) crongPlus = crongPlusTmp;
      if (crongMulti < crongMultiTmp) crongMulti = crongMultiTmp;
    }
    // console.log(pobiPlus, pobiMulti);
    pobiMax = pobiPlus > pobiMulti ? pobiPlus : pobiMulti;
    // console.log(pobiMax);
    crongMax = crongPlus > crongMulti ? crongPlus : crongMulti;
    // console.log(crongMax);
    if (pobiMax > crongMax) answer = 1;
    else if (pobiMax < crongMax) answer = 2;
    else answer = 0;
  } else answer = -1;

  return answer;
}

module.exports = problem1;
