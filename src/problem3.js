// number의 각 자리 숫자를 구해 배열로 저장하는 기능
const convertToDigitArr = (number) => {
  number = number.toString();
  return number;
};
// 해당 배열에 3, 6, 9가 몇 개인지 구하는 기능
function problem3(number) {
  var answer;
  let count = 0;
  let stepNum = number;
  for (stepNum = 1; stepNum <= number; stepNum++) {
    stepNum = convertToDigitArr(stepNum);
    for (j = 0; j < stepNum.length; j++) {
      if (stepNum[j] == 3 || stepNum[j] == 6 || stepNum[j] == 9) {
        count += 1;
      } else {
        continue;
      }
    }
  }
  answer = parseInt(count);
  return answer;
}

module.exports = problem3;
