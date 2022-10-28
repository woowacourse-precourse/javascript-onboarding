function problem2(cryptogram) {
  // 연속하는 중복 문자가 위치한 인덱스를 받아온다. 
  const indices = getIndicesOfConsecutiveDuplicateChars(cryptogram)

  // 연속하는 중복 문자가 없는 경우, 암호 해독이 완료되었다고 판단하고 결과를 반환한다.
  if (indices.length === 0) {
    return cryptogram
  }

  const nextCryptogram = getStrWithRemovingCharsAt(cryptogram, indices)
  return problem2(nextCryptogram)
}

// TODO: 연속하는 중복 문자가 위치한 인덱스들을 받아온다. 
function getIndicesOfConsecutiveDuplicateChars(str) {
  return []
}

// TODO: str에서 indices에 해당하는 문자를 삭제한 스트링을 반환한다.
function getStrWithRemovingCharsAt(str, indices) {
  return ''
}

module.exports = problem2;
