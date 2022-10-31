// 13인 경우 4(3,6,9,13인 경우 박수)회, 33인 경우 14(3,6,9,13,16,19,23,26,29,30,31,32,33(2))회
// 1의 자리에서 10000의 자리까지 3,6,9가 들어가는 경우 모두 count += 1
// [✅] let count = 0; 생성
// [✅] 1에서 number까지 전체의 수 검사 (for)
// [✅] 각 자리가 number % 10 === 3 || number % 10 === 6 || number % 10 === 9 인 경우일 때 마다 count += 1;
// [✅] currentNumber를 10으로 나눈 수가 0이 될 때 까지 반복 (while) -> currentNumber = Math.floor(currentNumber / 10);
// [✅] count 반환

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let currentNumber = i;
    while (currentNumber > 0) {
      if (
        currentNumber % 10 === 3 ||
        currentNumber % 10 === 6 ||
        currentNumber % 10 === 9
      ) {
        count += 1;
      }
      currentNumber = Math.floor(currentNumber / 10);
    }
  }
  return count;
}

console.log(problem3(10000));

module.exports = problem3;
