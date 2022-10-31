function problem3(number) {
  // dynamic programming 방식으로 진행
  let totalClaps = [];

  // 시작점: 1
  totalClaps[1] = 0;

  // number까지 구하기
  for (let i = 2; i <= number; i++) {
    totalClaps[i] = totalClaps[i - 1] + clap(i);
  }

  return totalClaps[number];
}

module.exports = problem3;

// 주어진 숫자의 각 번호를 반환하는 함수
function getDigits(number) {
  // 문자로 만들고, 각 문자로 쪼갠다
  let digits = number.toString().split("");

  // 문자를 숫자로 변환하고 반환
  return digits.map((element) => (parseInt(element)));
}

// 해당 숫자에 박수를 몇번 쳐야 하는지 반환하는 함수
function clap(number) {
  let count = 0;

  // 각 자릿수 받기
  const digits = getDigits(number);

  // 자릿수마다 3의 배수인지 확인
  digits.forEach((digit) => {
    if (digit > 0 && digit % 3 === 0) count++;
  })

  return count;
}