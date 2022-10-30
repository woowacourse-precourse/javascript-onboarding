/**
 * @name problem3
 * @description
 * 배달이가 좋아하는 369게임을 하고자 한다.
 * 놀이법은 1부터 숫자를 하나씩 대면서,
 * 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.
 * 숫자 number가 매개변수로 주어질 때,
 * 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return 하도록 solution 메서드를 완성하라.
 * @param {number} [number]
 * @return {number} 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return
 * @throws number는 1 이상 10,000 이하인 자연수이다.
 * @todo 1. 숫자에 3, 6, 9가 포함된 갯수의 배열을 리턴하는 함수
 * @todo 2. number 만큼 순회하면서 답 카운트
 */

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const includes = getIncluded369(i);
    if (includes) count += includes.length;
  }
  return count;
}

function getIncluded369(number) {
  return number.toString().match(/3|6|9/gi);
}

module.exports = problem3;
