function problem1(pobi, crong) {
  pobiLeftSum = 0;
  pobiLeftMultple = 1;
  pobiRightSum = 0;
  pobiRightMultple = 1;
  pobiMax = 0;

  crongLeftSum = 0;
  crongLeftMultple = 1;
  crongRightSum = 0;
  crongRightMultple = 1;
  crongMax = 0;

  //left
  pobiLeftNum = pobi[0];
  pobiLeftNum = String(pobiLeftNum);
  for (let i = 0; i < pobiLeftNum.length; i++) {
    pobiLeftSum += parseInt(pobiLeftNum[i]);
    pobiLeftMultple *= parseInt(pobiLeftNum[i]);
  }

  crongLeftNum = crong[0];
  crongLeftNum = String(crongLeftNum);
  for (let i = 0; i < crongLeftNum.length; i++) {
    crongLeftSum += parseInt(crongLeftNum[i]);
    crongLeftMultple *= parseInt(crongLeftNum[i]);
  }

  //right
  pobiRightNum = pobi[1];
  pobiRightNum = String(pobiRightNum);
  for (let i = 0; i < pobiRightNum.length; i++) {
    pobiRightSum += parseInt(pobiRightNum[i]);
    pobiRightMultple *= parseInt(pobiRightNum[i]);
  }

  crongRightNum = crong[1];
  crongRightNum = String(crongRightNum);
  for (let i = 0; i < crongRightNum.length; i++) {
    crongRightSum += parseInt(crongRightNum[i]);
    crongRightMultple *= parseInt(crongRightNum[i]);
  }

  console.log(pobiLeftSum, pobiLeftMultple, crongLeftSum, crongLeftMultple);
  console.log(pobiRightSum, pobiRightMultple, crongRightSum, crongRightMultple);

  var answer;
  return answer;
}

problem1([97, 98], [197, 198]);

module.exports = problem1;
