function problem3(number) {
  var answer;
  answer = gameStart(number);
  return answer;
}

module.exports = problem3;

const NUMBER_RANGE_START = 1;
const NUMBER_RANGE_END = 10000;

//주어진 값이 범위에 맞는 숫자인지 평가
function isNumber(number) {
  if (number < NUMBER_RANGE_START || number > NUMBER_RANGE_END) return false;
  if (typeof number === "number") return true;
  else return false;
}

//주어진 배열에서 3 ,6 ,9 를 추출하여 배열로 리턴.
function calc(arr) {
  return arr.filter(
    (strNum) => strNum === "3" || strNum === "6" || strNum === "9"
  );
}

//주어진 숫자를 배열로만들어 loop 안에서 calc() 로 가공된 배열의 길이만큼 박수의 횟수를 증가.
function gameStart(number) {
  const validate = isNumber(number);
  if (!validate) {
    return false;
  }

  let clap = 0;

  for (let i = 1; i <= number; i++) {
    const strNumber = String(i);
    const arr = strNumber.split("");
    clap += calc(arr).length;
  }

  return clap;
}
