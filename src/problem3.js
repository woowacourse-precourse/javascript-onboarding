const check369includes = (num) => {
  let answer = 0;
  let checkNumber = num;
  while (checkNumber > 0) {
    const number = checkNumber % 10;
    if (number !== 0 && number % 3 === 0) answer += 1;
    checkNumber = Math.floor(checkNumber / 10);
  }
  return answer;
};

function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += check369includes(i);
  }
  return answer;
}

module.exports = problem3;
