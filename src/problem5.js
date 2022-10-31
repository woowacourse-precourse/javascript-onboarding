function problem5(money) {
  let monetary = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(monetary.length).fill(0);

  monetary.forEach((val, idx) => {
    let rate = Math.floor(money / val);
    money -= rate * val;
    answer[idx] += rate;
  });

  return answer;
}

module.exports = problem5;
