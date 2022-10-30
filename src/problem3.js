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
 * @todo 1. 숫자에 3, 6, 9가 포함되었는지 판별하는 함수
 * @todo 2. 숫자에 3, 6, 9가 몇개 포함 되었는지 리턴하는 함수
 * @todo 3. 3, 6, 9가 포함 된 갯수를 reduce로 누적
 */

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const includes = getInclude369(i);
    if (includes) count += includes.length;
  }
  return count;
}

function getInclude369(number) {
  return number.toString().match(/3|6|9/gi);
}

module.exports = problem3;
