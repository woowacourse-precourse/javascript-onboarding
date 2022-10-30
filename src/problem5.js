const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
const result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function problem5(money) {
  var answer;
  for (let i = 0; i < 9; i++) {
    result[i] = Math.floor(money / arr[i]);
    money %= arr[i];
  }
  return (answer = result);
}

module.exports = problem5;
