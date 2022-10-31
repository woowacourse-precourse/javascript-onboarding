function problem5(money) {
  var answer = new Array(9);

  var moneySort = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i=0; i<moneySort.length; i++) {
    if (i === 0) {
      answer[i] = parseInt(money / moneySort[i]);
    }
    else {
      answer[i] = parseInt((money % moneySort[i-1]) / moneySort[i]);
    }
  }

  return answer;
}

module.exports = problem5;
