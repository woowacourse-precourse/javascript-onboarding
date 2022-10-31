function check369(num) {
  let count = 0;
  while (num) {
    let temp = num % 10;
    if (temp === 3 || temp === 6 || temp === 9) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; ++i) {
    answer += check369(i);
  }
  return answer;
}

module.exports = problem3;
