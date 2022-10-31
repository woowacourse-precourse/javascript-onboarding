/**
 * 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 반환합니다.
 * @param {number} number 369 게임의 최대 숫자입니다.
 * @returns {number} 총 쳐야 할 박수의 횟수입니다.
 */
function problem3(number) {
  let answer;
  let claps = [];

  for (i = 1; i <= number; i++) {
    // 문자열 중 3, 6, 9를 찾아 뽑아냅니다.
    let threeSixNine = i.toString().match(/[369]/g) || [];
    // 뽑아낸 문자열의 길이를 세어 3, 6, 9의 개수를 구합니다.
    claps.push(threeSixNine.length);
  }

  // claps에 저장된 숫자를 모두 더합니다.
  answer = claps.reduce((prev, current) => prev + current, 0);

  return answer;
}

module.exports = problem3;
