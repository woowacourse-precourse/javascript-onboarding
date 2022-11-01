MONEY_CLASS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

function problem5(money) {
  let left_money = money
  let answer = []
  MONEY_CLASS.forEach(element => {
    let count = parseInt(left_money / element)
    answer.push(count)
    left_money = left_money % element 
  });

  return answer;
}

module.exports = problem5;
