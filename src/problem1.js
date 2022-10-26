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

function problem1(pobi, crong) {}

module.exports = problem1;
