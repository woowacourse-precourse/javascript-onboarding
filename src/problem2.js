const isDuplicated = (str) => {
  // 연속하는 중복 문자들이 있을 경우 중복 문자가 시작하는 인덱스 반환
  for (let i=0; i<str.length-1; i++) {
    if (str[i] === str[i+1]) return i;
  }
  // 없을 경우 -1 반환
  return -1;
}

function problem2(cryptogram) {
  let idx = isDuplicated(cryptogram);
  while (idx !== -1) {
    cryptogram = cryptogram.substring(0, idx) + cryptogram.substring(idx + 2);
    idx = isDuplicated(cryptogram);
  }

  // cf. 연속하는 중복 문자들을 삭제한 결과를 return
  return cryptogram;
}

module.exports = problem2;
