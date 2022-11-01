function problem5(money) {
  var answer;
  let result = [];
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.floor(money / arr[i]));
    money = Math.floor(money % arr[i]);
  }
  answer = result;
  return answer;
}

module.exports = problem5;
