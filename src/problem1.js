// 페이지 번호가 적절한지 검증하는 기능
const validatePages = (pobi, crong) =>
  isPageContinuous(pobi) && isPageContinuous(crong);

// 페이지 번호가 연속적인지 확인하는 기능
const isPageContinuous = (pages) => (pages[1] - pages[0] === 1 ? true : false);

// 페이지 번호를 각 자리 숫자로 분리하는 기능
const splitPageNumber = (pages) => {
  const splittedNumbers = pages.map((number) =>
    number
      .toString()
      .split("")
      .map((number) => +number)
  );
  return splittedNumbers;
};

// 각 자리 숫자로 분리한 페이지 번호를 모두 더하는 기능
const addNumbers = (numbers) => {
  const result = numbers.map((number) =>
    number.reduce((acc, cur) => acc + cur, 0)
  );
  return result;
};

// 각 자리 숫자로 분리한 페이지 번호를 모두 곱하는 기능
const multiplyNumbers = (numbers) => {
  const result = numbers.map((number) =>
    number.reduce((acc, cur) => acc * cur, 1)
  );
  return result;
};

// 각 자리 숫자를 더한 것과 곱한 것중 더 큰 수를 찾는 기능
const getMaxNumber = (add, multiply) => {
  const result = Math.max(...add, ...multiply);
  return result;
};

// 각자의 점수를 비교하여 게임의 승자를 찾는 기능
const getWinner = (pobiScore, crongScore) => {
  if (pobiScore === crongScore) {
    return 0;
  }
  return pobiScore > crongScore ? 1 : 2;
};

// solution
const solution = (pobi, crong) => {
  if (!validatePages(pobi, crong)) {
    return -1;
  }
  const splittedPobi = splitPageNumber(pobi);
  const splittedCrong = splitPageNumber(crong);
  const pobiScore = getMaxNumber(
    addNumbers(splittedPobi),
    multiplyNumbers(splittedPobi)
  );
  const crongScore = getMaxNumber(
    addNumbers(splittedCrong),
    multiplyNumbers(splittedCrong)
  );
  const winner = getWinner(pobiScore, crongScore);
  return winner;
};

function problem1(pobi, crong) {
  const answer = solution(pobi, crong);
  return answer;
}

module.exports = problem1;
