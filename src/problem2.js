function problem2(cryptogram) {
  /**
   * 1. 문자를 배열로 분해
   * 2. 바로 다음에 오는 문자와 현재 문자를 비교하여 같으면 제거하고 함수 재실행(재귀함수)
   * 3. 겹치는 문자가 홀수일 경우 문자 하나가 남는 상황 핸들링 // baaaoat -> boat가 아닌 baoat로 반환됨
   * 4. 겹치는 문자가 없다면 함수 종료
   */
  let answer = cryptogram.split("");
  function removeString() {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        answer.splice(i, 2);
        removeString();
      }
    }
  }
  removeString();
  return answer.join("");
}

console.log(problem2("baaaoat"));

module.exports = problem2;
