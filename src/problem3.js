/**
 * 369게임이 종료됐을 때까지 친 박수의 횟수를 반환하는 함수
 * @param {number} number 369게임을 종료하는 시점의 숫자
 * @returns {number} 게임이 종료될 때까지 친 박수의 횟수
 */
function problem3(number) {
  // 박수 횟수를 0으로 초기화한다.
  let clapCount = 0;
  // 3 또는 6 또는 9에 해당하는 정규표현식을 만든다.
  const regExp369 = /[369]/g;

  // 1부터 종료시점의 숫자까지 순회하면서
  for (let i = 1; i <= number; i++) {
    // 해당 숫자의 각 자릿수에서 3, 6, 9를 찾아서 배열로 만든다.
    const matches = i.toString().match(regExp369);
    // 3, 6, 9의 개수를 박수 횟수에 더한다.
    if (matches) clapCount += matches.length;
  }

  // 박수 횟수를 반환한다.
  return clapCount;
}

module.exports = problem3;
