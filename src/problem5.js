const isMoney = (money) => {
  if (money < 1 || 1000000 < money) return false;
  return true;
}

function changeMoney(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  for (let i = 0; i < coins.length; i++) {
    let count = Math.floor(money / coins[i]);
    answer.push(count)
    money %= coins[i];
  }
  return answer;
}

function problem5(money) {
  let result = changeMoney(money)

  if (!isMoney(money)) { throw Error("1이상 1,000,000이하 자연수를 입력해주세요.") }
  else return result;
}

module.exports = problem5;