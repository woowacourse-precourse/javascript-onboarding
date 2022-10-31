function problem2(cryptogram) {
  // 중복 문자가 있으면 중복을 제거한 문자를 반환
  function removeDuplicate(word) {
    let result = ''
    let start = 0   // 현재 확인하고 있는 character의 인덱스
    while (start < word.length) {
      if (word[start] === word[start + 1]) {
        // 현재 character의 인덱스에서 연속해서 중복된 문자 찾기
        let idx = start
        while (word[idx + 1] === word[start]) {
          idx += 1
        }
        start = idx + 1
      } else {
        result += word[start]
        start += 1
      }
    }
    return result
  }

  // 중복 문자가 없을 때까지 반복
  while (true) {
    result = removeDuplicate(cryptogram)
    if (result === cryptogram) {
      return result
    }
    cryptogram = result
  }
}

module.exports = problem2;
