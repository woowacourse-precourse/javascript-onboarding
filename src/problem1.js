function problem1(pobi, crong) {
  var answer;

  var pobiLeftSum = 0;
  var pobiLeftMultple = 1;
  var pobiRightSum = 0;
  var pobiRightMultple = 1;
  var pobiMax = 0;

  var crongLeftSum = 0;
  var crongLeftMultple = 1;
  var crongRightSum = 0;
  var crongRightMultple = 1;
  var crongMax = 0;

  //예외처리
  if (pobi[0] - pobi[1] === -1 && crong[0] - crong[1] === -1) {
    //left
    var pobiLeftNum = pobi[0];
    pobiLeftNum = String(pobiLeftNum);
    for (let i = 0; i < pobiLeftNum.length; i++) {
      pobiLeftSum += parseInt(pobiLeftNum[i]);
      pobiLeftMultple *= parseInt(pobiLeftNum[i]);
    }

    var crongLeftNum = crong[0];
    crongLeftNum = String(crongLeftNum);
    for (let i = 0; i < crongLeftNum.length; i++) {
      crongLeftSum += parseInt(crongLeftNum[i]);
      crongLeftMultple *= parseInt(crongLeftNum[i]);
    }

    //right
    var pobiRightNum = pobi[1];
    pobiRightNum = String(pobiRightNum);
    for (let i = 0; i < pobiRightNum.length; i++) {
      pobiRightSum += parseInt(pobiRightNum[i]);
      pobiRightMultple *= parseInt(pobiRightNum[i]);
    }

    var crongRightNum = crong[1];
    crongRightNum = String(crongRightNum);
    for (let i = 0; i < crongRightNum.length; i++) {
      crongRightSum += parseInt(crongRightNum[i]);
      crongRightMultple *= parseInt(crongRightNum[i]);
    }

    var pobiValue = [
      pobiLeftSum,
      pobiLeftMultple,
      pobiRightSum,
      pobiRightMultple,
    ];
    var crongValue = [
      crongLeftSum,
      crongLeftMultple,
      crongRightSum,
      crongRightMultple,
    ];

    pobiMax = Math.max(...pobiValue);
    crongMax = Math.max(...crongValue);

    if (pobiMax > crongMax) {
      answer = 1;
    } else if (pobiMax < crongMax) {
      answer = 2;
    } else if (pobiMax === crongMax) {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
