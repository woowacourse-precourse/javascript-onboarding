function getDigits(num) {
  const out = [];
  while (num > 0) {
    out.push(num % 10);
    num = Math.floor(num / 10);
  }
  return out;
}

function getMultScore(num) {
  return getDigits(num).reduce((acc, x) => acc * x, 1);
}

function getSumScore(num) {
  return getDigits(num).reduce((acc, x) => acc + x, 0);
}

function getPageScore(num) {
  return Math.max(getMultScore(num), getSumScore(num));
}

function getLRScore(nums) {
  return Math.max(...nums.map(getPageScore));
}

function getWinner(score1, score2) {
  return score1 === score2 ? 0 : score1 > score2 ? 1 : 2;
}

function play(pobi, crong) {
  const pobiScore = getLRScore(pobi);
  const crongScore = getLRScore(crong);

  return getWinner(pobiScore, crongScore);
}

function checkValid(nums) {
  const cons = nums[1] - nums[0] === 1;
  const noFront = nums[0] !== 0;
  const noBack = nums[1] !== 400;
  if (cons && noFront && noBack) {
    return;
  }

  throw new Error();
}

function problem1(pobi, crong) {
  try {
    checkValid(pobi);
    checkValid(crong);
    return play(pobi, crong);
  } catch (e) {
    return -1;
  }
}

// console.log(problem1([97, 98], [197, 198]));
// console.log(problem1([131, 132], [211, 212]));
// console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
