function problem3(number) {
  let answer = 0;

  for (i = 1; i <= number; i++) {
    let temp;
    temp = i;

    let digit;

    while (temp > 0) {
      digit = temp % 10;
      if (digit === 3 || digit === 6 || digit === 9) answer++;
      temp = parseInt(temp / 10);
    }
  }
  return answer;
}

module.exports = problem3;
