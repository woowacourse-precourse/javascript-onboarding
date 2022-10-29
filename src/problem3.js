function problem3(number) {
  let answer = 0;

  for (let curNumber = 1; curNumber < number + 1; curNumber++) {
    answer += count369(curNumber);
  }
  return answer;
}

const is369 = (number) => {
  if (number === 3 || number === 6 || number === 9) return true;
  return false;
};

const count369 = (number) => {
  const numString = number + "";
  let count = 0;
  for (let i = 0; i < numString.length; i++) {
    if (is369(+numString[i])) count += 1;
  }

  return count;
};

module.exports = problem3;
