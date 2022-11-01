function problem6(forms) {
  var answer;
  return answer;
}

function errorHandler(forms) {
  /* forms의 크기가 10000보다 큰 경우
  나머지 예외처리는 실행 과정에서 처리 */
  if (forms.length > 10000) return true;
  else return false;
}

module.exports = problem6;
