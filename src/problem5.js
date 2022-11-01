function problem5(money) {
  let arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(let i=0; i<arr.length; i++) {
    if (money >= arr[i]) {
      answer[i] = Math.floor(money / arr[i]);
      money = money % arr[i];
    }
  }
  return answer;
}

module.exports = problem5;
