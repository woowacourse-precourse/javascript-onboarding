function problem5(money) {
  var answer;
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < 9; i++) {
    arr[i] = parseInt(money / bill[i], 10);
    money %= bill[i];
  }
  answer = arr;
  return answer;
}

module.exports = problem5;
