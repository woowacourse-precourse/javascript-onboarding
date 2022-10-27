function problem1(pobi, crong) {
  const LEFT = 0;
  const RIGHT = 1;

  const exceptionHandling = (pobi, crong) => {
    const caculateDiff = (page) => page[RIGHT] - page[LEFT];
    if ((caculateDiff(pobi) !== 1) | (caculateDiff(crong) !== 1)) return false;

    const isRightOddEvenPosition = (page) =>
      page[LEFT] % 2 === 1 && page[RIGHT] % 2 === 0;
    if (!isRightOddEvenPosition(pobi) | !isRightOddEvenPosition(crong))
      return false;

    const MIN = 1;
    const MAX = 400;
    const isValidNum = (num) => MIN < num && num < MAX;
    const isValidPage = (page) =>
      isValidNum(page[LEFT]) && isValidNum(page[RIGHT]);
    if (!isValidPage(pobi) | !isValidPage(crong)) return false;

    return true;
  };

  if (!exceptionHandling(pobi, crong)) return -1;

  const calculateScore = (page) => {
    const scoreArr = [];

    const getSumMul = (num) => {
      const numToArr = num.toString().split("").map(Number);
      let sum = 0;
      let mul = 1;

      for (let i = 0; i < numToArr.length; i++) {
        sum += numToArr[i];
        mul *= numToArr[i];
      }
      return [sum, mul];
    };

    scoreArr.push(...getSumMul(page[LEFT]));
    scoreArr.push(...getSumMul(page[RIGHT]));

    return Math.max(...scoreArr);
  };

  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);

  var answer;
  return answer;
}

module.exports = problem1;
