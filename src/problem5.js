function problem5(money) {
  if (!checkInputValid(money)) {
    return 'error';
  }

  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = currency.map((value) => {
    let quotient = Math.floor(money / value)
    if (quotient) {
      money -= (quotient * value)
      return quotient
    }
    return 0
  })

  return answer;
}

function checkInputValid(money) {
  if (money < 1 || money > 1000000) return false;
  return true;
}

module.exports = problem5;
