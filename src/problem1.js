function problem1(pobi, crong) {
  const isRightInput = (arr) => {
    if (!(arr.length == 2)) {
      return false;
    }
    if (arr[1] - arr[0] != 1) {
      return false;
    }
    if (arr[0] <= 1 || arr[1] >= 400) {
      return false;
    }
    if (arr[0] % 2 == 0 || arr[1] % 2 == 1) {
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
    if (!isRightInput(pobi) || !isRightInput(crong)) {
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

  return solution(pobi, crong);
}

module.exports = problem1;
