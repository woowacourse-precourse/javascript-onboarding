function problem4(word) {
  /**
   * 1. 아스키 코드로 변환하여 공백일 경우 공백(32) 그대로 출력
   * 2. 대문자일 경우 (아스키 코드가 90이하일 경우) 청개구리 사전의 합이 155인 것을 이용해 반대 스펠링 반환
   * 3. 소문자일 경우 합이 219인 것을 이용하여 반대 스펠링 반환(219 - ascii)
   */
  let answer = word
    .split("")
    .map((string) => {
      if (string.charCodeAt() === 32) {
        return 32;
      } else if (string.charCodeAt() <= 90) {
        return 155 - string.charCodeAt();
      } else {
        return 219 - string.charCodeAt();
      }
    })
    .map((ascii) => String.fromCharCode(ascii))
    .join("");

  return answer;
}

module.exports = problem4;
