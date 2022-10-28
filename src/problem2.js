// 연속하는 중복 문자 삭제 결과 반환 기능

function isDuplicate(cryptogram) {
  let check = false;

  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) return true;
  }

  return check;
}

function problem2(cryptogram) {
  let answer;

  while (isDuplicate(crypto)) {}

  return answer;
}

module.exports = problem2;
