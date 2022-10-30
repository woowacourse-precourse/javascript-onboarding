function problem1(pobi, crong) {
  var answer;
  validChecker(pobi, crong)
    ? (answer = -1)
    : (answer = winnerChecker(maxValChecker(pobi), maxValChecker(crong)));
  return answer;
}

function validChecker(pobi, crong) {
  return (
    Math.abs(pobi[0] - pobi[1]) !== 1 || Math.abs(crong[0] - crong[1]) !== 1
  );
}

function maxValChecker(pages) {
  const num1 = String(pages[0]),
    num2 = String(pages[1]);

  let num2P = parseInt(num2[0]),
    num2M = parseInt(num2[0]),
    num1P = parseInt(num1[0]),
    num1M = parseInt(num1[0]);

  for (let i of num1.slice(1)) {
    num1P = num1P + parseInt(i);
    num1M = num1M * parseInt(i);
  }

  for (let i of num2.slice(1)) {
    num2P = num2P + parseInt(i);
    num2M = num2M * parseInt(i);
  }
  return Math.max(Math.max(num1P, num1M), Math.max(num2P, num2M));
}

function winnerChecker(pobiMaxNum, crongMaxNum) {
  return pobiMaxNum > crongMaxNum ? 1 : (pobiMaxNum = crongMaxNum ? 0 : 2);
}

module.exports = problem1;
