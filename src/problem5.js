function problem5(money) {
  var answer = [];
  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i of arr) {
    let count = 0;
    count = count + Math.floor(money / i);
    money -= i * Math.floor(money / i);
    answer.push(count);
  }
  return answer;
}

module.exports = problem5;
