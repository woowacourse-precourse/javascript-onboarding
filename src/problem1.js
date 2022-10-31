function isValid(pageInfo) {
  const leftPage = pageInfo[0];
  const rightPage = pageInfo[1];
  const myRegExp = /^[0-9]+$/;
  if (leftPage <= 1 || rightPage >= 400) {
    return false;
  }
  if (leftPage % 2 === 0 || rightPage % 2 !== 0) {
    return false;
  }
  if (rightPage - leftPage !== 1) {
    return false;
  }
  if (!myRegExp.test(leftPage) || !myRegExp.test(rightPage)) {
    return false;
  }
  if (pageInfo.length !== 2) {
    return false;
  }
  return true;
}

function getSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

function problem1(pobi, crong) {
  var answer;
  if (!isValid(pobi) || !isValid(crong)) return -1;
  return answer;
}

module.exports = problem1;
