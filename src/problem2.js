function problem2(cryptogram) {
  let result = cryptogram;
  
  if (result === cutDuplication(cryptogram)) return result;
  return problem2(cutDuplication(result));
}

// 예외사항
function exception(cryptogram) {
  if (cryptogram < 1 || cryptogram > 1000) return true;
  return false;
}

// 연속하는 중복문자 제거
function cutDuplication(cryptogram) {
  cryptogram = cryptogram + " ";
  let len = 1;
  let frontArr = cryptogram[0];
  let result = "";

  for (let i = 1; i < cryptogram.length; i++) {
    if (frontArr === cryptogram[i]) len = len + 1;
      else {
        if (len < 2) result = result + frontArr;

        len = 1;
        frontArr = cryptogram[i];
      }
  }

  return result;
}

module.exports = problem2;

// 기능들
// 1. 암호문 길이 판별(1~1000)
// 2. 알파벳이 소문자인가?
// 3. 연속하는 중복문자 제거