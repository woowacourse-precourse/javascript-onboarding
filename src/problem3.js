// 13인 경우 4(3,6,9,13인 경우 박수)회, 33인 경우 14(3,6,9,13,16,19,23,26,29,30,31,32,33(2))회
// 1의 자리에서 10000의 자리까지 3,6,9가 들어가는 경우 count += 1
// [✅] number의 자릿수 파악하기 -> const digit = number.toString().split('').length;
// [✅] let count = 0; 생성
// [✅] 1에서 number까지 전체의 수 검사
// [] digit이 1인 경우(9이하) -> number % 10 === 3 || number % 10 === 6 || number % 10 === 9 인 경우일 때 마다 count += 1;
// [] digit이 2인 경우(99이하) -> (number % 10) 동일 과정 2회 반복 -> 2자리 검사
// [] digit이 3인 경우(999이하) -> (number % 10) 동일 과정 3회 반복 -> 3자리 검사
// [] digit이 4인 경우(9999이하) -> (number % 10) 동일 과정 4회 반복 -> 4자리 검사
// [✅] count 반환

function problem3(number) {
  const digit = number.toString().split('').length;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
  return count;
}

console.log(problem3(133));

module.exports = problem3;
