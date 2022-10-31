function problem1(pobi, crong) {
  let answer;
  return answer;
}

module.exports = problem1;

function checkBigger(num) {
  let num_sum = num
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((sum, curr) => sum + curr, 0);
  let num_times = num
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((sum, curr) => sum * curr, 1);

  if (num_sum > num_times) {
    return num_sum;
  }
  if (num_times > num_sum) {
    return num_times;
  }
}
