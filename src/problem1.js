function problem1(pobi, crong) {
  let answer;

  if (isInvalidInput(pobi, crong)) {
    return -1;
  }

  let pobiScore = calculateScore(pobi);
  let crongScore = calculateScore(crong);

  answer = compareScore(pobiScore, crongScore);

  return answer;
}

function isInvalidInput(pobi, crong) {
  if (isFirstOrLastPage(pobi, crong)) return true;
  if (isInvalidPageNumber(pobi, crong)) return true;
  return false;
}

function isFirstOrLastPage(pobi, crong) {
  if (pobi[0] === 1) return true;
  if (pobi[1] === 400) return true;
  if (crong[0] === 1) return true;
  if (crong[1] === 400) return true;
  return false;
}

function isInvalidPageNumber(pobi, crong) {
  if (pobi[0] % 2 === 0 || pobi[0] + 1 !== pobi[1]) return true;
  if (crong[0] % 2 === 0 || crong[0] + 1 !== crong[1]) return true;
  return false;
}

function calculateScore(pageArr) {
  let leftScore = compareAdditionAndMultiplication(pageArr[0]);
  let rightScore = compareAdditionAndMultiplication(pageArr[1]);
  return leftScore > rightScore ? leftScore : rightScore;
}

function compareAdditionAndMultiplication(number) {
  let additionScore = additionEachDigit(number);
  let multiplicationScore = multiplicationEachDigit(number);
  return additionScore > multiplicationScore
    ? additionScore
    : multiplicationScore;
}

function additionEachDigit(number) {
  if (number === 0) return number;
  return additionEachDigit(parseInt(number / 10)) + (number % 10);
}

function multiplicationEachDigit(number) {
  if (number === 0) return 1;
  return multiplicationEachDigit(parseInt(number / 10)) * (number % 10);
}

function compareScore(pobiScore, crongScore) {
  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  return 2;
}

module.exports = problem1;
