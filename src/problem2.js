function problem2(cryptogram) {
  // 연속하는 중복 문자가 위치한 인덱스를 받아온다.
  const indices = getIndicesOfConsecutiveDuplicateChars(cryptogram);

  // 연속하는 중복 문자가 없는 경우, 암호 해독이 완료되었다고 판단하고 결과를 반환한다.
  if (indices.length === 0) {
    return cryptogram;
  }

  // 연속하는 중복 문자를 삭제한 새로운 문자열을 받아온다.
  const nextCryptogram = getStrWithRemovingCharsAt(cryptogram, indices);

  // 새로운 문자열에서도 연속하는 중복 문자를 삭제하기 위해 재귀적으로 함수를 호출한다.
  return problem2(nextCryptogram);
}

/**
 * 연속하는 중복 문자가 위치한 인덱스들을 받아온다.
 * @param {string} str
 * @returns {number[]}
 */
function getIndicesOfConsecutiveDuplicateChars(str) {
  const indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === str[i] || str[i] === str[i + 1]) {
      indices.push(i);
    }
  }
  return indices;
}

/**
 * str에서 indices에 해당하는 문자를 삭제한 스트링을 반환한다.
 * @param {string} str
 * @param {number[]} indices
 * @returns {string}
 */
function getStrWithRemovingCharsAt(str, indices) {
  let retStr = "";
  for (let i = 0; i < str.length; i++) {
    if (indices.includes(i) === false) {
      retStr += str[i];
    }
  }
  return retStr;
}

module.exports = problem2;
