function isWrongPage(lt, rt) {
  if (lt % 2 !== 1 || rt % 2 !== 0) return true;
  if (lt + 1 !== rt) return true;
  return false;
}

function numberToArr(num) {
  return [...num.toString()].map(Number);
}

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function calc(calcFn, defaultNum) {
  return (arr) => arr.reduce(calcFn, defaultNum);
}

const sumArr = calc(sum, 0);
const productArr = calc(product, 1);

function getScore(num1, num2) {
  if (num1 > num2) return 1;
  if (num1 < num2) return 2;
  if (num1 === num2) return 0;
  return -1;
}

function problem1(pobi, crong) {
  var answer;
  if (isWrongPage(...pobi) || isWrongPage(...crong)) return -1;

  const pobiNumsArr = pobi.map(numberToArr);
  const crongNumsArr = crong.map(numberToArr);

  const pobiScore = Math.max(...pobiNumsArr.flatMap((numArr) => [sumArr(numArr), productArr(numArr)]));
  const crongScore = Math.max(...crongNumsArr.flatMap((numArr) => [sumArr(numArr), productArr(numArr)]));

  answer = getScore(pobiScore, crongScore);
  return answer;
}

module.exports = problem1;
