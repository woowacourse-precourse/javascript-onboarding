function problem1(pobi, crong) {
  var answer;

  var pobiPlus = pobi[1].toString().split("");
  var pobiPlusResult = 0;

  var pobiGop = pobi[1].toString().split("");
  var pobiGopResult = 1;

  var pobiResult;

  var crongPlus = crong[1].toString().split("");
  var crongPlusResult = 0;

  var crongGop = crong[1].toString().split("");
  var crongGopResult = 1;

  var crongResult;

  for (var i = 0; i < pobiPlus.length; i++) {
    pobiPlusResult += parseInt(pobiPlus[i]);
  }
  for (var i = 0; i < pobiGop.length; i++) {
    pobiGopResult *= parseInt(pobiGop[i]);
  }
  for (var i = 0; i < crongPlus.length; i++) {
    crongPlusResult += parseInt(crongPlus[i]);
  }
  for (var i = 0; i < crongGop.length; i++) {
    crongGopResult *= parseInt(crongGop[i]);
  }

  pobiResult = Math.max(pobiGopResult, pobiPlusResult);
  crongResult = Math.max(crongGopResult, crongPlusResult);

  if (
    pobiResult > crongResult &&
    pobi[0] + 1 === pobi[1] &&
    crong[0] + 1 === crong[1] &&
    pobi[0] !== 1 &&
    pobi[1] !== 400 &&
    crong[0] !== 1 &&
    crong[1] !== 400
  ) {
    answer = 1;
  } else if (
    pobiResult === crongResult &&
    pobi[0] + 1 === pobi[1] &&
    crong[0] + 1 === crong[1] &&
    pobi[0] !== 1 &&
    pobi[1] !== 400 &&
    crong[0] !== 1 &&
    crong[1] !== 400
  ) {
    answer = 0;
  } else if (
    pobiResult < crongResult &&
    pobi[0] + 1 === pobi[1] &&
    crong[0] + 1 === crong[1] &&
    pobi[0] !== 1 &&
    pobi[1] !== 400 &&
    crong[0] !== 1 &&
    crong[1] !== 400
  ) {
    answer = 2;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
