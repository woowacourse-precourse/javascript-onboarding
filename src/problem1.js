// const splitNumber = (num) => {
//   num = num + "";
//   return num.split("").map((item) => Number(item));
// };

// const getScore = (leftNums, rightNums) => {
//   const leftSum = leftNums.reduce((acc, cur) => acc + cur, 0);
//   const leftMultiply = leftNums.reduce((acc, cur) => acc * cur, 1);
//   const rightSum = rightNums.reduce((acc, cur) => acc + cur, 0);
//   const rightMultiply = rightNums.reduce((acc, cur) => acc * cur, 1);
//   return Math.max(leftSum, leftMultiply, rightSum, rightMultiply);
// };

// function problem1(pobi, crong) {
//   const [pobiLeftPage, pobiRightPage] = pobi;
//   const [crongLeftPage, crongRightPage] = crong;

//   if (
//     pobiRightPage - pobiLeftPage !== 1 ||
//     crongRightPage - crongLeftPage !== 1
//   )
//     return -1;

//   const pobiScore = getScore(
//     splitNumber(pobiLeftPage),
//     splitNumber(pobiRightPage)
//   );
//   const crongScore = getScore(
//     splitNumber(crongLeftPage),
//     splitNumber(crongRightPage)
//   );

//   if (pobiScore > crongScore) return 1;
//   if (pobiScore > crongScore) return 2;
//   return 0;
// }

// module.exports = problem1;

const isCorrectPage = ([left, right]) => {
  if (left % 2 === 0 || right % 2 === 1) return false;
  if (left < 1 || right > 400) return false;
  if (right - left !== 1) return false;
  return true;
};

const splitNumber = ([left, right]) => {
  const leftNums = (left + "").split("").map((item) => Number(item));
  const rightNums = (right + "").split("").map((item) => Number(item));
  return [leftNums, rightNums];
};

const getScore = ([left, right]) => {
  const leftSum = left.reduce((acc, cur) => acc + cur, 0);
  const leftMultiply = left.reduce((acc, cur) => acc * cur, 1);
  const rightSum = right.reduce((acc, cur) => acc + cur, 0);
  const rightMultiply = right.reduce((acc, cur) => acc * cur, 1);
  return Math.max(leftSum, leftMultiply, rightSum, rightMultiply);
};

function problem1(pobi, crong) {
  if (!isCorrectPage(pobi) || !isCorrectPage(crong)) return -1;
}
module.exports = problem1;
