/*
 * <기능 목록>
 * 1. 숫자를 문자열로 변환하고 문자열에 3,6,9가 들어가는 (손뼉치는) 횟수를 반환하는 countClap() 함수.
 * 2. 1부터 주어진 숫자 number까지 손뼉치는 총 횟수를 반환하는 countTotalClap() 함수.
 */

function problem3(number) {
  var answer;
  return answer;
}

function countClap(number) {
  const clapNumbers = [3, 6, 9];
  const numStrings = number.toString();
  let clap = 0;

  for (let numString of numStrings) {
    if (clapNumbers.includes(parseInt(numString))) {
      clap++;
    }
  }

  return clap;
}

function countTotalClap(number) {
  let totalClap = 0;
  for (let i = 1; i <= number; i++) {
    totalClap += countClap(i);
  }

  return totalClap;
}

module.exports = problem3;
