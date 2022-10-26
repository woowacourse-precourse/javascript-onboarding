function problem1(pobi, crong) {
  function makeSum(n) {
    let sum = 0;
    do {
      sum += n % 10;
      n = Math.floor(n / 10);
    } while (n > 0);
    return sum;
  }

  function makeMul(n) {
    let mul = 1;
    do {
      mul *= n % 10;
      n = Math.floor(n / 10);
    } while (n > 0);
    return mul;
  }
  var answer;
  return answer;
}

module.exports = problem1;
