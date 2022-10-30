function problem2(cryptogram) {
  for (let loop = cryptogram.length; loop--;) { // cryptogram의 글자 수만큼 반복
    for (let index = 0; index < cryptogram.length; index++) {
      if (cryptogram[index] === cryptogram[index + 1]) {
        cryptogram = cryptogram.slice(0, index) + cryptogram.slice(index + 2);
      }
    }
  }

  // 마지막까지 중복이 있을 경우 모두 삭제
  const answer = cryptogram[0] === cryptogram[1] ? cryptogram = "" : cryptogram; 

  return answer;
}

module.exports = problem2;
