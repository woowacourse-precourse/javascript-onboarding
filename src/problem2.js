function problem2(cryptogram) {
  // 예외사항 1. 길이가 1보다 작거나 1000보다 클 수 없다.
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return -1;
  }
  // 예외사항 2. 알파벳 소문자 이외에는 올 수 없다. (정규표현식 사용)
  if (/[^a-z]/.test(cryptogram)) {
    return -1;
  }

  while (1) {
    // 중복되는 index 값을 얻는다.
    const duplicatedindex = getDuplictatedindex(cryptogram);
    if (duplicatedindex === -1) break;
    const count = getCount(cryptogram, duplicatedindex);
    cryptogram.splice(duplicatedindex, count);
  }

  return cryptogram;
}

// 중복된 문자가 있는 index 값을 얻는 함수
function getDuplictatedindex(cryptogram) {
  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      return i;
    }
    return -1;
  }
}

// 중복된 문자로부터 몇 개까지 중복인지 count 값을 얻는 함수
function getCount(cryptogram, duplicatedindex) {}

module.exports = problem2;
