function problem1(pobi, crong) {
  if (!invalid(pobi) || !invalid(crong)) {
    return -1;
  }
  
  let answer = -1;
  const pobiPoint = getPoint(pobi);
  const crongPoint = getPoint(crong);
  
  if (pobiPoint > crongPoint) {
    answer = 1;
  }
  else if (pobiPoint < crongPoint) {
    answer = 2;
  }
  else if (pobiPoint === crongPoint) {
    answer = 0;
  }
  return answer;
}

function invalid([left, right]) {
  return right - left === 1 && left % 2 === 1 && right % 2 === 0
}

function getPoint([left, right]) {
  const getArray = (number) => number.toString().split('').map(i => parseInt(i));
  const leftArr = getArray(left);
  const rightArr = getArray(right);

  const add = (acc, cur) => acc + cur;
  const mul = (acc, cur) => acc * cur;
  const leftPoint = Math.max(leftArr.reduce(add), leftArr.reduce(mul));
  const rightPoint = Math.max(rightArr.reduce(add), rightArr.reduce(mul));

  return Math.max(leftPoint, rightPoint);
}

module.exports = problem1;
