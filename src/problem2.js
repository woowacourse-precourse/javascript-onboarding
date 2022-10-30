/**
 * 기능 정의
 *
 * - [x] 길이가 1이라면 그대로 반환하는 기능
 * - [x] 길이가 2라면 서로 같은지 확인하고 같다면 공백, 아니면 문자 그대로 반환하는 기능
 * - [x] 스택을 이용해서 주어진 문자열을 비교해나가면서 연속된 문자 제거하는 기능
 */

/**
 * 암호화된 문자열 cryptogram을 입력받고, 연속된 문자열이 없을 때까지
 * 제거한 후에 남은 문자열을 반환하는 함수
 *
 * @param {string} cryptogram 길이가 1이상 1000이하인 문자열
 * @returns {string} 연속된 문자열을 제거하고 남은 문자열
 */
function problem2(cryptogram) {
  if (cryptogram.length < 2) {
    return cryptogram;
  }

  if (cryptogram.length === 2) {
    return cryptogram[0] === cryptogram[1] ? "" : cryptogram;
  }

  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    const current = cryptogram[i];

    if (stack.length > 0 && stack[stack.length - 1] === current) {
      stack.pop();
      continue;
    }

    stack.push(current);
  }

  return stack.join("");
}

module.exports = problem2;
