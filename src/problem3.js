function isValid(number) {
  const regex = /^[1-9][0-9]*$/;

  if (number.length < 1 || number.length > 10000 || !regex.test(number)) {
    throw "1 이상 10000 이하인 자연수를 입력해주세요";
  }
}

function problem3(number) {
  var answer;

  isValid(number);
  return answer;
}

module.exports = problem3;
