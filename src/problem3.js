function problem3(number) {
  let answer = 0;
  let j = 0;
  if (!checkException(number)) return;
  for (let i = 0; i <= number; i++) {
    j = i;
    while (j > 0) {
      if (j % 10 === 3 || j % 10 === 6 || j % 10 === 9) answer++;
      j = parseInt(j / 10);
    }
  }
  return answer;
}

function checkException(number) {
  return number <= 10000 && number >= 1;
}
module.exports = problem3;
