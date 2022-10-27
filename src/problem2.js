function problem2(cryptogram) {
  if (exception(cryptogram)) return false;
  
  while (1) {
    const result = duplicateJudgment(cryptogram);
    if (!(duplicateJudgment(cryptogram)))
    {
      return result;
    }
  }
}

// 암호문 길이 판별, 암호문이 소문자인지 판별
function exception(cryptogram) {
  if (cryptogram < 1 || cryptogram> 1000 ) return true;
  const compareCrypto = cryptogram.toLowerCase();
  if (cryptogram !== compareCrypto) return true;
  return false;
}

// 중복 판별
function duplicateJudgment(cryptogram) {
  const tellDuplication = new Array(cryptogram.length);
  tellDuplication.fill(0);

  return recordArray(tellDuplication, cryptogram)
}

// 중복 판별 배열만들기
function recordArray(tellDuplication, cryptogram) {
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i-1] === cryptogram[i]) {
      tellDuplication[i - 1] = 1;
      tellDuplication[i] = 1;
    }
  }
  if (!(tellDuplication.indexOf(1))) {
    return false;
  }
  return repeatDelete(tellDuplication, cryptogram);
}

// 연속하는 중복문자 제거
function repeatDelete(tellDuplication, cryptogram) {
  const cryptogramArr = Array.from(cryptogram);
  for (let i = 0; i < cryptogramArr.length; i++) {
    if (tellDuplication[i] == 1) cryptogramArr.splice(i, 1);
  }
  const result = cryptogramArr.join("");
  return result;
}

problem2("browoanoommnaon");

module.exports = problem2;

// 기능들
// 1. 암호문 길이 판별(1~1000)
// 2. 알파벳이 소문자인가?
// 3. 중복문자 있는지 판별
// 4. 연속하는 중복문자 제거
