function problem5(money) {
  var answer = [];
  answer.push(parseInt(money / 50000))
  money = money % 50000
  answer.push(parseInt(money / 10000))
  money = money % 10000
  answer.push(parseInt(money / 5000))
  money = money % 5000
  answer.push(parseInt(money / 1000))
  money = money % 1000
  answer.push(parseInt(money / 500))
  money = money % 500
  answer.push(parseInt(money / 100))
  money = money % 100
  answer.push(parseInt(money / 50))
  money = money % 50
  answer.push(parseInt(money / 10))
  money = money % 10
  answer.push(parseInt(money / 1))
  money = money % 1
  return answer;
}
module.exports = problem5;
