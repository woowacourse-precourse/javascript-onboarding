function problem5(money) {
  const unit_arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(unit_arr.length).fill(0);

  for (let i = 0; i < unit_arr.length; i++) {
    if (money / unit_arr[i]) {
      answer[i] = Math.floor(money / unit_arr[i]);
      money = money % unit_arr[i];
    }
  }

  return answer;
}

module.exports = problem5;