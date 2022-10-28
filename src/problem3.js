function problem3(number) {
  let answer;
  answer = countClap(number);
  return answer;
}

function countClap(number) {
  let cnt = 0;

  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    [...("" + currentNumber)].forEach((digit) => {
      if (digit === "3" || digit === "6" || digit === "9") cnt++;
    });
  }

  return cnt;
}

module.exports = problem3;
