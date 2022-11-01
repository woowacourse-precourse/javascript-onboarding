function getPageSum(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}

function getPageMulti(num) {
  let result = 1;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    result *= parseInt(num[i]);
  }
  return result;
}

function compareNum(num1, num2) {
  return Math.max(num1, num2);
}

/**
 * 문제 1번 예외처리 함수
 * @param {number[]} numArr
 * @returns 예외처리 결과
 */
function handleException(numArr) {
  let EXCEPTION_RESULT = true;
  if (numArr[1] - numArr[0] !== 1) {
    EXCEPTION_RESULT = false;
  }
  if (numArr.length !== 2) {
    EXCEPTION_RESULT = false;
  }
  if (numArr[1] % 2 !== 0 || numArr[0] % 2 !== 1) {
    EXCEPTION_RESULT = false;
  }
  return EXCEPTION_RESULT;
}

function problem1(pobi, crong) {
  var answer;
  if (!(handleException(pobi) && handleException(crong))) {
    answer = -1;
    return answer;
  }
  let pobiScore = compareNum(
    compareNum(getPageSum(pobi[0]), getPageMulti(pobi[0])),
    compareNum(getPageSum(pobi[1]), getPageMulti(pobi[1]))
  );
  let crongScore = compareNum(
    compareNum(getPageSum(crong[0]), getPageMulti(crong[0])),
    compareNum(getPageSum(crong[1]), getPageMulti(crong[1]))
  );
  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  } else {
    answer = -1;
  }
  return answer;
}
module.exports = problem1;
