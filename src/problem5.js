function problem5(money) {
  var answer;

  try {
    if (money > 1000000 || money < 1) {
      throw new Error('money must between(1, 1,000,000)');
    }
  } catch (e) {
    answer = -1;
  }

  return answer;
}

console.log(problem5(1000001));
console.log(problem5(5555));
console.log(problem5(0));

module.exports = problem5;
