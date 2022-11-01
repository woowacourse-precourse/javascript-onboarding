function getShare(money, divider) {
  return Math.floor(money / divider);
}

function getRest(money, divider) {
  return money % divider;
}

function getShareAndRest(money, divider) {
  return [getShare, getRest].map((fn) => fn(money, divider));
}

function problem5(money) {
  const answer = [];
  const divideUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let targetMoney = money;

  divideUnits.forEach((divider) => {
    const [share, rest] = getShareAndRest(targetMoney, divider);
    answer.push(share);
    targetMoney = rest;
  });

  return answer;
}

module.exports = problem5;
