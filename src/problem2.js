// main
function problem2(cryptogram) {
  // 예외처리
  if (errorHandler(cryptogram)) {
    console.log("Error : 글자수 제한");
    return null;
  }

  var answer;
  return answer;
}

function errorHandler(cryptogram) {
  if (cryptogram.length > 1000) return true;
}

// 암호해독 함수
function splitWord(word) {
  // 암호를 쪼개서 arr에 저장
  var arr = (word + '').split('');
}

module.exports = problem2;
