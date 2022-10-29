function problem5(money) {
  let answer = [];

  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    while (money >= arr[i]) {
      money -= arr[i];
      count++;
    }
    answer.push(count);
  }
  return answer;
}

module.exports = problem5;