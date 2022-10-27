function problem1(pobi, crong) {
  pobiSum = 0;
  pobiMultple = 1;
  pobiMax = 0;

  crongSum = 0;
  crongMultple = 1;
  crongMax = 0;

  //left
  pobiLeftNum = pobi[0];
  pNum = String(pobiLeftNum);
  for (let i = 0; i < pNum.length; i++) {
    pobiSum += parseInt(pNum[i]);
    pobiMultple *= parseInt(pNum[i]);
  }

  crongLeftNum = crong[0];
  cNum = String(crongLeftNum);
  for (let i = 0; i < cNum.length; i++) {
    crongSum += parseInt(cNum[i]);
    crongMultple *= parseInt(cNum[i]);
  }

  var answer;
  return answer;
}

module.exports = problem1;
