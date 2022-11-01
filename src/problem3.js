function check369(num) {
  let clap = 0;
  while (num) {
    const temp = num % 10;
    if (temp === 3 || temp === 6 || temp === 9) clap += 1;
    num = parseInt(num / 10);
  }
  return clap;
}

function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += check369(i);
  }
  return answer;
}

module.exports = problem3;
