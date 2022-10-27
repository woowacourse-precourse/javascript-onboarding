// 1. [x] 나눠지는 돈의 기준대로 배열 만들기
// 2. [x] answer엔 money를 각 standard로 나눈 몫을 저장하기
//  2.1 [x]거스름돈을 계산하며 1원단위까지 반복

function problem5(money) {
  // 1. 나눠지는 돈대로 배열 생성
  const standard = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  // 2. 각 standard로 나눈 몫 저장
  for (let i=0; i<standard.length; i++) {
    answer.push(parseInt(money / standard[i]));
    // 2.1 거스름돈 계산
    money -= standard[i] * answer[answer.length - 1];
  }

  return answer;
}
module.exports = problem5;
