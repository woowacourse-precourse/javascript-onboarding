function problem3(number) {
  // number는 1이상 10000이하인 자연수이다.
  if (number < 1 || number > 10000 || Number.isInteger(number) !== true) {
    return -1;
  }

  let clapCount = 0;

  for (let i = 0; i <= number; i++) {
    clapCount += getClapCount(i);
  }
  return clapCount;
}

function getClapCount(number) {
  // 주어진 매개변수를 문자열로 반환하고 요소를 하나씩 쪼갠다.
  const list = number.toString().split("");

  // filter로 문자 '3' '6' '9' 가 있는 요소만 모아 새로운 clap 배열을 만들고 그 clap 배열의 길이를 반환한다.
  const clap = list.filter(
    (list) => list === "3" || list === "6" || list === "9"
  ).length;
  return clap;
}

module.exports = problem3;
