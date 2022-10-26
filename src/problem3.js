function problem3(number) {
  var answer;
  return answer;
}

const clapCounter = (num) => {
  const clapNumber = "369";
  let counter = 0;
  const numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    for (let j = 0; j < clapNumber.length; j++) {
      if (numString[i] === clapNumber[j]) {
        counter += 1;
        break;
      }
    }
  }
  return counter;
};

module.exports = problem3;
