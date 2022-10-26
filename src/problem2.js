// 문자열을 해독하는 함수
function decryptStr(cryptogram) {
  let decryptedStr = "";
  for (let i = 0; i < cryptogram.length; i++) {
    // 현재 문자가 앞 뒤로 중복이면 건너뛰기, 아니면 해독 문자열에 추가
    if (
      cryptogram[i] != cryptogram[i + 1] &&
      cryptogram[i] != cryptogram[i - 1]
    )
      decryptedStr += cryptogram[i];
  }

  return decryptedStr;
}

// 중복 문자가 있는지 체크하는 함수
function checkDecryptedStr(decryptedStr) {
  let set = new Set(decryptedStr);
  let temp = "";
  for (let char of set) {
    temp += char;
  }

  if (temp == decryptedStr) return true;
  else return false;
}

function problem2(cryptogram) {
  var answer;

  // 해독된 문자열 초기화
  let decryptedStr = cryptogram;

  // 규칙. 연속으로 붙어 있는 동일한 문자가
  // 없을 때 까지 붙어 있는 문자들 제거하기 (while 루프 사용)
  while (!checkDecryptedStr(decryptedStr)) { 
    decryptedStr = decryptStr(decryptedStr);
  }

  answer = decryptedStr;
  return answer;
}

module.exports = problem2;
