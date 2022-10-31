function countClap(number) {
  let count = 0;
  for(let i = 1; i <= number; i++) {
    const digitList = i.toString().split("");
    count += digitList.filter((digit) => digit == 3 | digit == 6 | digit == 9).length;
  }

  return count;
}

function problem3(number) {
  const answer = countClap(number);

  return answer;
}

module.exports = problem3;
