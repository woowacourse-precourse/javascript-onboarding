function problem1(pobi, crong) {
  if (!valid(pobi) || !valid(crong)) return -1;

  const pobiPoint = getPoint(pobi);
  const crongPoint = getPoint(crong);
  
  if (pobiPoint > crongPoint) return 1;
  if (pobiPoint < crongPoint) return 2;
  return 0;
}

function valid([left, right]) {
  return (
    right - left === 1 
    && (left % 2 === 1 && right %2 === 0)
    && (left >= 1 && right >= 2)
    && (left <= 399 && right <= 400)
  );
}

function getPoint([left, right]) {
  const getArray = (number) => String(number).split('').map(i => parseInt(i));
  const add = (acc, cur) => acc + cur;
  const mul = (acc, cur) => acc * cur;

  const leftArr = getArray(left);
  const rightArr = getArray(right);
  
  return Math.max(
    leftArr.reduce(add),
    leftArr.reduce(mul),
    rightArr.reduce(add),
    rightArr.reduce(mul)
  );
}

module.exports = problem1;
