class Cash {
  constructor(money) {
    this.input = money;
    const cashes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let pocket = cashes.map(x => {
      let n = parseInt(money / x)
      money = money - x * n;
      return n
    })
    this.result = pocket;
  }
  get valid() {
    if (this.input >= 1 && this.input <= 1000000) {
      return true
    }
    else {
      return false
    }
  }
}

function problem5(money) {
  var answer;
  let cashInfo = new Cash(money);
  // console.log(cashInfo)

  if (cashInfo.valid) {
    answer = cashInfo.result;
  }
  else {
    answer = 'invalid input';
  }
  return answer;
}

module.exports = problem5;