function problem1(pobi, crong) {
  var pobiMax = 0;
  var crongMax = 0;

  // calculate
  if (range(pobi) === true && range(crong) === true) {
    pobiMax = calc(pobi);
    crongMax = calc(crong);
  }
  else {
    return -1
  }
  
  // compare
  if (pobiMax > crongMax)
    return 1;
  else if (pobiMax < crongMax)
    return 2;
  else if (pobiMax === crongMax)
    return 0;
  else
    return -1;
  // pobi 17, crong 18
}

function calc(pages) {
  var maxNumber = 0;
  var tempForSum = 0;
  var tempForMulti = 1;

  for (var i=0; i<2; i++) {
    var tempForCalc = pages[i];

    while (tempForCalc > 0) {
      tempForSum += tempForCalc % 10;
      tempForCalc = Math.floor(tempForCalc / 10);
      if (tempForSum > maxNumber)
        maxNumber = tempForSum;
    }

    tempForCalc = pages[i];

    while (tempForCalc > 0) {
      tempForMulti *= tempForCalc % 10;
      tempForCalc = Math.floor(tempForCalc / 10);
      if (tempForMulti > maxNumber)
        maxNumber = tempForMulti;
    }
  }

  return maxNumber;
}

function range(pages) {
  if (pages[0] >= 2 && pages[1] <= 399 && pages[0]+1 === pages[1])
    return true
  else
    return false
}

module.exports = problem1;