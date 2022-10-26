function problem1(pobi, crong) {
  let answer = 0;

  const pobiScore = Math.max(...pobi.map((num) => getMaxScore(num)));
  const crongScore = Math.max(...crong.map((num) => getMaxScore(num)));

  if (checkException(pobi) || checkException(crong)) return -1;
  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;

  return answer;
}

function checkException(num) {
  if (num.length !== 2) return true;
  if (num[1] - num[0] !== 1) return true;
  if (num[0] === 1 || num[1] === 400) return true;
  if (num[0] < 1 || num[1] > 400) return true;

  return false;
}

function getMaxScore(num) {
  return Math.max(sumPage(num), multiPage(num));
}

function sumPage(num) {
  const numArr = num.toString().split("");
  const result = numArr.reduce((prev, cur) => prev + Number(cur), 0);

  return result;
}

function multiPage(num) {
  const numArr = num.toString().split("");
  const result = numArr.reduce((prev, cur) => prev * Number(cur), 1);

  return result;
}

module.exports = problem1;
