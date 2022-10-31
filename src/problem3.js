function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const digits = i.toString().split('').map(Number);
    digits.forEach(digit => {
      if (digit === 3 || digit === 6 || digit === 9) answer += 1;
    });
  }
  return answer;
}

module.exports = problem3;
