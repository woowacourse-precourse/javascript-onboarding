function problem2(cryptogram) {
  let decryptedStr = cryptogram;

  while (!checkDupStr(decryptedStr)) { 
    decryptedStr = decryptStr(decryptedStr);
  }

  return decryptedStr;
}

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

function checkDupStr(decryptedStr) {
  let set = new Set(decryptedStr);
  let temp = "";
  for (let char of set) {
    temp += char;
  }

  if (temp == decryptedStr) return true;
  else return false;
}

module.exports = problem2;

