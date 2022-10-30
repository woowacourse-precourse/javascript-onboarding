function problem5(money) {
  let result = [];
  let change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let i = 0;
  while (1) {
    result.push(parseInt(money / change[i]));
    money %= change[i];
    i++;
    if (i == change.length) {
      break;
    }
  }
  return result;
}
console.log(problem5(15000)); // 그리디 풀이

module.exports = problem5;
