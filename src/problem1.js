function inputCheck(pages) {
  let [left, right] = pages;
  return 1 <= left && left < 400 && left % 2 == 1 && left + 1 == right;
}

function scoreGenerator(pages) {
  const [left, right] = pages;
  const leftNumArr = ("" + left).split("").map((v) => parseInt(v));
  const rightNumArr = ("" + right).split("").map((v) => parseInt(v));
  return Math.max(
    leftNumArr.reduce((acc, cur) => (acc += cur), 0),
    leftNumArr.reduce((acc, cur) => (acc *= cur), 1),
    rightNumArr.reduce((acc, cur) => (acc += cur), 0),
    rightNumArr.reduce((acc, cur) => (acc *= cur), 1)
  );
}

function problem1(pobi, crong) {
  if (!inputCheck(pobi) || !inputCheck(crong)) {
    return -1;
  }
  let answer = 0;
  const pobiScore = scoreGenerator(pobi);
  const crongScore = scoreGenerator(crong);
  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;
  return answer;
}

module.exports = problem1;
