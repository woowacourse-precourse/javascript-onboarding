function problem3(number) {
  let answer = 0;
  for (let i = 3; i <= number; i++) answer += clapCounter(i);
  return answer;
}

const checkClapNumber = (numString) => {
  const clapNumber = "369";
  for (let i = 0; i < clapNumber.length; i++) {
    if (numString === clapNumber[i]) return true;
  }
};

const clapCounter = (num) => {
  let counter = 0;
  const numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    if (checkClapNumber(numString[i])) counter += 1;
  }
  return counter;
};

module.exports = problem3;
