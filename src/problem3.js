function problem3(number) {
  var answer;
  let countClap = 0;

  for (let i = 0; i <= number; i++) {
    let numberString = i.toString();
    let numberLength = i.toString().length;
    for (let j = 0; j < numberLength; j++) {
      if (
        numberString[j] == '3' ||
        numberString[j] == '6' ||
        numberString[j] == '9'
      ) {
        countClap++;
      }
    }
  }
  answer = countClap;
  return answer;
}

module.exports = problem3;
