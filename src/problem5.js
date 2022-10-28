function problem5(money) {
  let answer;
  answer = getChangeArray(money);
  return answer;
}

function getChangeArray(money) {
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let currentMoney = money;

  return changes.map((change) => {
    const changeCnt = Math.floor(currentMoney / change);
    currentMoney %= change;

    return changeCnt;
  });
}

module.exports = problem5;
