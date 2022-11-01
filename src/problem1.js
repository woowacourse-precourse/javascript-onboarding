function problem1(pobi, crong) {
  let pobiPages = pobi;
  let crongPages = crong;
  let answer;

  if (
    pobiPages[1] !== pobiPages[0] + 1 ||
    crongPages[1] !== crongPages[0] + 1
  ) {
    console.log(-1);
  } else {
    let pobiLeftPageDigits = pobiPages[0].toSting().split("");
    let pobiLeftSum = 0;
    let pobiLeftMultiplication = 1;
    let pobiRightPageDigits = pobiPages[1].toSting().split("");
    let pobiRightSum = 0;
    let pobiRightMultiplication = 1;

    for (let leftDigit of pobiLeftPageDigits) {
      pobiLeftSum += leftDigit;
      pobiLeftMultiplication *= leftDigit;
    }
    for (let rightDigit of pobiRightPageDigits) {
      pobiRightSum += rightDigit;
      pobiRightMultiplication *= rightDigit;
    }

    let pobiMaxCandidates = [
      pobiLeftSum,
      pobiRightSum,
      pobiLeftMultiplication,
      pobiRightMultiplication,
    ];
    let pobiMax = 0;

    for (let i = 0; i < pobiMaxCandidates.length; i++) {
      if (pobiMaxCandidates[i] > pobiMax) {
        pobiMax = pobiMaxCandidates[i];
      }
    }

    let crongLeftPageDigits = crongPages[0].toSting().split("");
    let crongLeftSum = 0;
    let crongLeftMultiplication = 1;
    let crongRightPageDigits = crongPages[1].toSting().split("");
    let crongRightSum = 0;
    let crongRightMultiplication = 1;

    for (let leftDigit of crongLeftPageDigits) {
      crongLeftSum += leftDigit;
      crongLeftMultiplication *= leftDigit;
    }
    for (let rightDigit of crongRightPageDigits) {
      crongRightSum += rightDigit;
      crongRightMultiplication *= rightDigit;
    }

    let crongMaxCandidates = [
      crongLeftSum,
      crongRightSum,
      crongLeftMultiplication,
      crongRightMultiplication,
    ];
    let crongMax = 0;

    for (let i = 0; i < crongMaxCandidates.length; i++) {
      if (crongMaxCandidates[i] > crongMax) {
        crongMax = crongMaxCandidates[i];
      }
    }

    if (pobiMax > crongMax) {
      answer = 1;
    } else if (pobiMax < crongMax) {
      answer = 2;
    } else {
      answer = 0;
    }
  }

  return answer;
}

module.exports = problem1;
