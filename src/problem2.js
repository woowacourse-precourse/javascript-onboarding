function problem2(cryptogram) {
  /*
  기능 목록
  1. cryptogram을 한 자리씩 잘라서 dirty 배열로 변환
  2. 첫 Cycle 먼저 구현 (처음부터 끝까지 훑으면서 중복된 문자 삭제하기)
  3. flag 추가하여 중복된 문자가 없을 때까지 반복
  4. dirty 배열을 합쳐서 clean 문자열로 변환 후 정답으로 반환
  */
  
  var dirty = cryptogram.split('');

  var hasTarget = true;

  while (hasTarget) {
    hasTarget = false;
    for (i = 0; i < dirty.length - 1;) {
      if (dirty[i] === dirty[i + 1]) {
        dirty = dirty.filter((v, idx) => idx !== i);
        dirty = dirty.filter((v, idx) => idx !== i);
        hasTarget = true;
      } else i++;
    }
  };

  var clean = dirty.join('');
  return clean;
}

module.exports = problem2;
