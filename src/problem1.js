function checkNextPage(leftPage, rightPage) {
  return rightPage - leftPage === 1 ? true : false;
}
function EvenAndOddCheck(leftNumber, rightNumber) {
  if (leftNumber % 2 === 1 && rightNumber % 2 === 0) {
    return true;
  }
  return false;
}
function limitPageCheck(leftNumber, rightNumber) {
  return leftNumber > 2 && rightNumber < 399 ? true : false;
}
function errorCheck(leftPage, rightPage) {
  if (
    checkNextPage(leftPage, rightPage) &&
    EvenAndOddCheck(leftPage, rightPage) &&
    limitPageCheck(leftPage, rightPage)
  ) {
    return false;
  }
  return true;
}

function stringSplit(string) {
  return String(string).split("");
}
function maxNumber(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}

function calculate(number) {
  let sum = 0,
    muliplication = 1;
  let splitNumber = stringSplit(number);
  for (let charNumber of splitNumber) {
    sum += Number(charNumber);
    muliplication *= Number(charNumber);
  }
  return maxNumber(sum, muliplication);
}

function problem1(pobi, crong) {
  let pobiLeftPage = pobi[0];
  let pobiRightPage = pobi[1];
  let crongLeftPage = crong[0];
  let crongRightPage = crong[1];

  if (
    errorCheck(crongLeftPage, crongRightPage) ||
    errorCheck(pobiLeftPage, pobiRightPage)
  ) {
    return -1;
  }

  let pobiLeftResult = calculate(pobiLeftPage);
  let pobiRightResult = calculate(pobiRightPage);
  let pobimax = maxNumber(pobiLeftResult, pobiRightResult);

  let crongLeftResult = calculate(crongLeftPage);
  let crongRightResult = calculate(crongRightPage);
  let crongmax = maxNumber(crongLeftResult, crongRightResult);

  if (pobimax > crongmax) return 1;
  if (pobimax < crongmax) return 2;
  if (pobimax === crongmax) return 0;
}

module.exports = problem1;
