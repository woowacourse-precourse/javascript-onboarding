function problem5(money) {
  const newArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  for (let i = 0; i < newArr.length; i++) {
    answer.push(parseInt(money / newArr[i]));
    money = money % newArr[i];
  }
  return answer;
}
let money = 50237;
console.log(problem5(money));
module.exports = problem5;
