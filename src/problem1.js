function problem1(pobi, crong) {
  var answer;

  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if (
    pobiLeft + 1 !== pobiRight ||
    pobiLeft % 2 !== 1 ||
    pobiRight % 2 !== 0 ||
    crongLeft + 1 !== crongRight ||
    crongLeft % 2 !== 1 ||
    crongRight % 2 !== 0 ||
    pobiLeft < 1 ||
    pobiLeft > 400 ||
    pobiRight < 1 ||
    pobiRight > 400 ||
    crongLeft < 1 ||
    crongRight > 400 ||
    crongRight < 1 ||
    crongRight > 400
  )
    return -1;

  const [pobiLeftSum, pobiRightSum, crongLeftSum, crongRightSum] = [
    pobiLeft,
    pobiRight,
    crongLeft,
    crongRight,
  ].map((num) => {
    sum = 0;
    while (num > 0) {
      sum += num % 10;
      num /= 10;
    }
  });

  const [pobiLeftMul, pobiRightMul, crongLeftMul, crongRightMul] = [
    pobiLeft,
    pobiRight,
    crongLeft,
    crongRight,
  ].map((num) => {
    mul = 1;
    while (num > 0) {
      mul *= num % 10;
      num /= 10;
    }
  });

  const pobiMax = Math.max(
    pobiLeftSum,
    pobiRightSum,
    pobiLeftMul,
    pobiRightMul
  );

  const crongMax = Math.max(
    crongLeftSum,
    crongRightSum,
    crongLeftMul,
    crongRightMul
  );

  pobiMax > crongMax
    ? (answer = 1)
    : pobiMax < crongMax
    ? (answer = 2)
    : (answer = 0);

  return answer;
}

module.exports = problem1;
