function problem5(money) {
  const currentList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = new Array(currentList.length).fill(0);

  currentList.forEach((val, idx) => {
    let quotient = Math.floor(money / val);
    money -= quotient * val;
    answer[idx] += quotient;
  });

  return answer;
}

module.exports = problem5;
