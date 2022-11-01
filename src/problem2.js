// [✅] cryptogram을 split('')하여 배열로 변환
// [✅] cryptogram를 순회하면서 특정 index의 문자가 index + 1의 문자가 일치하는지 찾기
// [✅] 연속된 중복문자를 splice하여 cryptogram 속에서 제거
// [✅] 중복문자가 없을 때 까지 위의 과정 반복 후 result.join('') 반환 / while의 종료조건을 무엇으로 해야할까...?
// [✅] 중복 제거중인 문자를 담기 위한 deduplication 생성
// [✅] result.join('')의 length가 이전 deduplication의 length와 차이가 없다면, while 종료

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
