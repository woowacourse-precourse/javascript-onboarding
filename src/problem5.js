function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = Array.from({length: currency.length}, () => 0);
  let leftMoney = money;
  let i = 0;

  while(leftMoney !== 0) {
    const numberOfBill = Math.floor(leftMoney / currency[i]);
    leftMoney -= currency[i] * numberOfBill;
    answer[i] = numberOfBill;
    i++;
  }
  
  return answer;
}

module.exports = problem5;
