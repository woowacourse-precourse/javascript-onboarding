function convertMonetary(copiedMoney, monetary) {
  let answer = [];
  for (i = 0; i < monetary.length; i++) {
    const currentMonetary = monetary[i];
    answer.push(Math.floor(copiedMoney / currentMonetary));
    copiedMoney = copiedMoney % currentMonetary;
  }
  return answer;
}

function problem5(money) {
  let copiedMoney = money;
  let monetary = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return convertMonetary(copiedMoney, monetary);
}

module.exports = problem5;
