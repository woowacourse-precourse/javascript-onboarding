function isValid(number) {
  const regex = /^[1-9][0-9]*$/;

  if (number.length < 1 || number.length > 10000 || !regex.test(number)) {
    throw "1 이상 10000 이하인 자연수를 입력해주세요";
  }
}

function getNumberToArr(number) {
  const stringNum = String(number);
  const convertToNumberTypeFn = (num) => Number(num);
  const numberArr = Array.from(stringNum, convertToNumberTypeFn);

  return numberArr;
}

function clap(number) {
  let result = 0;
  if (number === 3 || number === 6 || number === 9) {
    result += 1;
  }
  return result;
}

function problem3(number) {
  let answer = 0;

  isValid(number);

  for (let i = 1; i <= number; i++) {
    getNumberToArr(i).map((num) => {
      answer += clap(num);
    });
  }
  return answer;
}

module.exports = problem3;
