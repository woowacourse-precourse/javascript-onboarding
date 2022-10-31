/**
 * 기능 정의
 *
 * - [x] 길이가 1이라면 그대로 반환하는 기능
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
  if (cryptogram.length <= 1) {
    return cryptogram;
  }

  const stack = [cryptogram];

  while (stack) {
    const current = stack.pop();
    const decrypted = current
      .split("")
      .filter((char, i) => char !== current[i - 1] && char !== current[i + 1]);
    const answer = decrypted.join("");

    if (current === answer) {
      return answer;
    }

    stack.push(answer);
  }
}

module.exports = problem2;
