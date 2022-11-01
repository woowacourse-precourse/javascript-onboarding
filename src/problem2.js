function problem2(cryptogram) {
  const result = cryptogram.split('');
  let deduplication = '';
  while (true) {
    // 중복제거 이전의 문자 저장
    deduplication = result.join('');
    result.map((alphabet, idx) => {
      // 현재 인덱스의 문자와 다음 인덱스의 문자의 일치여부 확인
      if (alphabet === result[idx + 1]) {
        // 일치 시 제거
        result.splice(idx, 2);
      }
    });
    // 중복제거 후의 문자와 이전의 문자를 비교, 일치 시 반환
    if (result.join('') === deduplication) {
      return result.join('');
    }
  }
}

module.exports = problem2;
