function problem5(money) {
  const unitList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answerList = new Array(unitList.length).fill(0);
  let index = 0;

  while (money > 0) {
    const count = Math.floor(money / unitList[index]);
    answerList[index] = count;
    if (count) money -= unitList[index] * count;
    index++;
  }

  return answerList;
}

module.exports = problem5;
