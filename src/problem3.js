function game(num) {
  let count = 0;
  while (num !== 0) {
    let temp = num % 10;
    if ((temp === 3) || (temp === 6) || (temp === 9)) {
      count += 1;
    }
    num = parseInt(num / 10);
  }
  return count;
}

function problem3(number) {
  var answer = 0;
  for (let i = 0; i <= number; i++) {
    answer += game(i);
  }
  return answer;
}

module.exports = problem3;
