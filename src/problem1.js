function problem1(pobi, crong) {
  var answer;
  var pobiNum = 0;
  var crongNum = 0;

  if (pobi[0] + 1 === pobi[1] && crong[0] + 1 === crong[1]) {
    pobiPageSum = (pobi[1] + "")
      .split("")
      .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    pobiPageMul = (pobi[1] + "")
      .split("")
      .reduce((acc, cur) => parseInt(acc) * parseInt(cur));

    pobiPageSum > pobiPageMul
      ? (pobiNum = pobiPageSum)
      : (pobiNum = pobiPageMul);
    crongRightPage = (crong[1] + "").split("");

    crongPageSum = (crong[1] + "")
      .split("")
      .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    crongPageMul = (crong[1] + "")
      .split("")
      .reduce((acc, cur) => parseInt(acc) * parseInt(cur));

    crongPageSum > crongPageMul
      ? (crongNum = crongPageSum)
      : (crongNum = crongPageMul);
    if (pobiNum > crongNum) {
      answer = 1;
    } else if (crongNum > pobiNum) {
      answer = 2;
    } else if ((pobiNum = crongNum)) {
      answer = 0;
    } else {
      answer = -1;
    }
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
