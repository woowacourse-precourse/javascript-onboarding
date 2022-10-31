function problem5(money) {
  var answer = new Array(9).fill(0);
  let bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let pointer = 0;

  while (money > 0) {
    if (money < bills[pointer]) {
      pointer++;
      continue;
    }
    let count = Math.floor(money / bills[pointer]);
    money = money % bills[pointer];
    answer[pointer] = count;
    pointer++;
  }
  return answer;
}

module.exports = problem5;
