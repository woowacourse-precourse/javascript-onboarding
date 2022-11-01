//책 페이지가 1~400인지 체크
function isInPage(arr1, arr2) {
  if (
    arr1.every((item) => item >= 1 && item <= 400) &&
    arr2.every((item) => item >= 1 && item <= 400)
  ) {
    return true;
  }
  return false;
}

function isRightPage(arr1, arr2) {
  //페이지 순서가 올바르지 않으면 false
  if (arr1[1] - arr1[0] > 1 || arr2[1] - arr2[0] > 1) {
    return false;
    //오른쪽 페이지가 홀수이면 false
  } else if (arr1[1] % 2 !== 0 || arr2[1] % 2 !== 0) {
    return false;
    //왼쪽 페이지가 짝수이면 false
  } else if (arr1[0] % 2 !== 1 || arr2[0] % 2 !== 1) {
    return false;
  }
  return true;
}

function addorMulNum(arr) {
  let left = arr[0];
  let right = arr[1];
  //왼쪽 페이지 합
  let addLeft = left
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((acc, curr) => acc + curr, 0);
  //오른쪽 페이지 합
  let addRight = right
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((acc, curr) => acc + curr, 0);
  //왼쪽 페이지 곱
  let mulLeft = left
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((acc, curr) => acc * curr, 1);
  //오른쪽 페이지 곱
  let mulRight = right
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((acc, curr) => acc * curr, 1);
  //4개 중 제일 큰 숫자 return
  return Math.max(addLeft, addRight, mulLeft, mulRight);
}

function problem1(pobi, crong) {
  if (isInPage(pobi, crong) && isRightPage(pobi, crong)) {
    let maxPobi = addorMulNum(pobi);
    let maxCrong = addorMulNum(crong);

    if (maxPobi > maxCrong) {
      return 1;
    } else if (maxPobi < maxCrong) {
      return 2;
    } else if (maxCrong === maxPobi) {
      return 0;
    }
  }
  return -1;
}

module.exports = problem1;
