function problem1(pobi, crong) {
  const answer = compareMaxNumber(makeMaxNumber(pobi, crong));
  return answer;
}

function compareMaxNumber(maxNumberArray) {
  const pobiFinalNumber = maxNumberArray[0];
  const crongFinalNumber = maxNumberArray[1];

  if (maxNumberArray === -1) return -1
  if (pobiFinalNumber > crongFinalNumber) return 'pobi'
  if (pobiFinalNumber === crongFinalNumber) return 'draw'
  if (pobiFinalNumber < crongFinalNumber) return 'crong'
  return -1
}


function makeMaxNumber(pobi, crong) {
  // 입력값에 대한 각각의 예외처리 우선시!
  if (!checkValid(pobi) || !checkValid(crong)) {
    return -1
  }
  //이후 메인 로직()
  const pobiMaxNumber = Math.max(caseAddNumber(pobi), caseMultipleNumber(pobi));
  const crongMaxNumber = Math.max(caseAddNumber(crong), caseMultipleNumber(crong));

  const maxNumberArray = [pobiMaxNumber, crongMaxNumber]
  return [...maxNumberArray]
}

function caseAddNumber(userName) {
  const oddPageAddMaxNumber = makeOddNumberString(userName).reduce((acc, cur) => {
    return acc + cur
  }, 0);

  const evenPageAddMaxNumber = makeEvenNumberString(userName).reduce((acc, cur) => {
    return acc + cur
  }, 0);

  return (oddPageAddMaxNumber > evenPageAddMaxNumber) ? oddPageAddMaxNumber : evenPageAddMaxNumber;
}

function caseMultipleNumber(userName) {
  const oddPageMultipleMaxNumber = makeOddNumberString(userName).reduce((acc, cur) => {
    return acc * cur
  }, 1);

  const evenPageMultipleMaxNumber = makeEvenNumberString(userName).reduce((acc, cur) => {
    return acc * cur
  }, 1);
  return (oddPageMultipleMaxNumber > evenPageMultipleMaxNumber) ? oddPageMultipleMaxNumber : evenPageMultipleMaxNumber;
}

function makeOddNumberString(userName) {
  return String(userName[0]).split('').map(i => +i);
}

function makeEvenNumberString(userName) {
  return String(userName[1]).split('').map(i => +i);
}

function checkValid(userName) {
  if (!isDuplicate(userName)) return false
  if (!isNotFitNumber(userName)) return false
  if (!notInRange(userName)) return false
  if (!betweenValue(userName)) return false
  return true
}

function isDuplicate(userName) {
  if (userName[0] === userName[1]) return false;
  return true
}

function isNotFitNumber(userName) {
  if (userName[0] % 2 !== 1 || userName[1] % 2 !== 0) return false
  return true
}

function betweenValue(userName) {
  if (userName[1] - userName[0] !== 1) return false;
  return true
}

function notInRange(userName) {
  if (!correctRange(userName[0]) || !correctRange(userName[1])) return false;
  return true
}

function correctRange(pageNumber) {
  const minPage = 1;
  const maxPage = 400;
  if (pageNumber >= minPage && pageNumber <= maxPage) return true
  return false
}

module.exports = problem1;