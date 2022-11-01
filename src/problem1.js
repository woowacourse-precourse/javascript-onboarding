function problem1(pobi, crong) {
  var answer;
  const add = (str) => {
    return str
      .split("")
      .map((item) => parseInt(item))
      .reduce((a, b) => a + b, 0);
  };
  const mul = (str) => {
    return str
      .split("")
      .map((item) => parseInt(item))
      .reduce((a, b) => a * b, 1);
  };

  const compareAddMul = (str) => {
    const addResult = add(str);
    const mulResult = mul(str);

    if (addResult > mulResult) {
      return addResult;
    } else if (addResult < mulResult) {
      return mulResult;
    } else {
      return (addResult + mulResult) / 2;
    }
  };
  const compareLeftRight = (arr) => {
    const leftResult = compareAddMul(arr[0].toString());
    const rightResult = compareAddMul(arr[1].toString());
    if (leftResult > rightResult) {
      return leftResult;
    } else if (leftResult < rightResult) {
      return rightResult;
    } else {
      return (leftResult + rightResult) / 2;
    }
  };
  const checkExcept = (pobi, crong) => {
    const isStarEnd = (element) =>
      element === 1 || element === 400 ? true : false;
    const isDiffOnePage = (array) => {
      const diff = array[1] - array[0];
      return diff === 1 ? false : true;
    };
    const isOddEven = (array) => {
      array[0] % 2 === 1 && array[1] % 2 === 0 ? false : true;
    };

    return isStarEnd(pobi[0]) ||
      isStarEnd(pobi[1]) ||
      isStarEnd(crong[0]) ||
      isStarEnd(crong[1]) ||
      isDiffOnePage(pobi) ||
      isDiffOnePage(crong) ||
      isOddEven(pobi) ||
      isOddEven(crong)
      ? true
      : false;
  };
  const comparePobiCrong = (pobi, crong) => {
    // console.log(`${compareLeftRight(crong)} crong`);
    if (checkExcept(pobi, crong)) {
      return -1;
    } else if (compareLeftRight(pobi) > compareLeftRight(crong)) {
      return 1;
    } else if (compareLeftRight(pobi) < compareLeftRight(crong)) {
      return 2;
    } else if (compareLeftRight(pobi) === compareLeftRight(crong)) {
      return 0;
    } else {
      return -1;
    }
  };
  answer = comparePobiCrong(pobi, crong);
  return answer;
}

module.exports = problem1;
