// 페이지 번호가 적절한지 검증하는 기능
function validatePages(pobi, crong) {
  if (!isPageContinuous(pobi) || !isPageContinuous(crong)) {
    return false;
  }
  return true;
}

// 페이지 번호가 연속적인지 확인하는 기능
function isPageContinuous(pages) {
  if (pages[1] - pages[0] === 1) {
    return true;
  }
  return false;
}

// 페이지 번호를 각 자리 숫자로 분리하는 기능
function splitPageNumber(pages) {
  const splitedNumbers = pages.map((number) =>
    number
      .toString()
      .split("")
      .map((number) => +number)
  );
  return splitedNumbers;
}

// 각 자리 숫자로 분리한 페이지 번호를 모두 더하는 기능
function addNumbers(numbers) {
  const result = numbers.map((number) =>
    number.reduce((acc, cur) => acc + cur, 0)
  );
  return result;
}

// 각 자리 숫자로 분리한 페이지 번호를 모두 곱하는 기능
function multiplyNumbers(numbers) {
  const result = numbers.map((number) =>
    number.reduce((acc, cur) => acc * cur, 1)
  );
  return result;
}

// 각 자리 숫자를 더한 것과 곱한 것중 더 큰 수를 찾는 기능
function getMaxNumber(add, multiply) {
  const result = Math.max(...add, ...multiply);
  return result;
}

// 각자의 점수를 비교하여 게임의 승자를 찾는 기능
function getWinner(pobiScore, crongScore) {
  if (pobiScore === crongScore) {
    return 0;
  }
  return pobiScore > crongScore ? 1 : 2;
}

function problem1(pobi, crong) {
  if (!validatePages(pobi, crong)) {
    return -1;
  }
  const splitedPobi = splitPageNumber(pobi);
  const splitedCrong = splitPageNumber(crong);
  const pobiScore = getMaxNumber(
    addNumbers(splitedPobi),
    multiplyNumbers(splitedPobi)
  );
  const crongScore = getMaxNumber(
    addNumbers(splitedCrong),
    multiplyNumbers(splitedCrong)
  );
  const answer = getWinner(pobiScore, crongScore);
  return answer;
}

module.exports = problem1;
