function is369(number) {
  if (number !== 0 && number % 3 === 0) return 1;
  return 0;
}
function countClap(number) {
  let ret = 0;
  while (number) {
    if (is369(number % 10)) ret++;
    number = Math.trunc(number / 10);
  }
  return ret;
}
function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += countClap(i);
  }
  return answer;
}
module.exports = problem3;
