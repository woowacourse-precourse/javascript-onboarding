function problem2(cryptogram) {
  if (exception(cryptogram)) return false;
  var answer;
  return answer;
}

//암호문 길이 판별
function exception(cryptogram) {
  if (cryptogram < 1 || cryptogram> 1000 ) return true;
  const compareCrypto = toLowerCase();
  if (cryptogram !== compareCrypto) return true;
  return false;
}

module.exports = problem2;

//기능들
// 1. 암호문 길이 판별(1~1000)
// 2. 알파벳이 소문자인가?
// 3. 연속하는 중복문자 제거
// 4. 중복문자 있는지 판별(임시)