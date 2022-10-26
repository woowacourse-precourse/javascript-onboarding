function problem1(pobi, crong) {
  var answer;

  const isRightInput = (pobi, crong) => {
    if (!(pobi.length == 2 && crong.length == 2)) {
      return false;
    }
    if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
      return false;
    }
    if (pobi[0] == 1 || pobi[1] == 400 || crong[0] == 1 || crong[1] == 400) {
      return false;
    }
    return true;
  };

  const addAllNums = (num) => {
    if (num < 10) {
      return num;
    }
    return (num % 10) + addAllNums(parseInt(num / 10));
  };

  const multiplyAllNums = (num) => {
    if (num < 10) {
      return num;
    }
    return (num % 10) * multiplyAllNums(parseInt(num / 10));
  };

  const findMaxOfTwo = (num1, num2) => {
    return Math.max(num1, num2);
  };

  const findMaxNum = (num1, num2) => {
    let leftMax = findMaxOfTwo(addAllNums(num1), multiplyAllNums(num1));
    let rightMax = findMaxOfTwo(addAllNums(num2), multiplyAllNums(num2));
    return findMaxOfTwo(leftMax, rightMax);
  };

  const solution = (pobi, crong) => {
    if (!isRightInput(pobi, crong)) {
      return -1;
    }
    let pobi_score = findMaxNum(pobi[0], pobi[1]);
    let crong_score = findMaxNum(crong[0], crong[1]);
    if (pobi_score === crong_score) {
      return 0;
    }
    if (pobi_score > crong_score) {
      return 1;
    }
    if (pobi_score < crong_score) {
      return 2;
    }
  };

  answer = solution(pobi, crong);
  return answer;
}

module.exports = problem1;
