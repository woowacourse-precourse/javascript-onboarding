/**
 * 1. 반복되는 로직이 필요로 하다.(혹은 재귀적)
 * 2. 문자열에서 중복되는 지를 판별하는 함수가 필요로 하다.
 * 3. 문자열을 제거하는 함수가 필요로 하다.
 */
function problem2(cryptogram) {
  let splitCrpyto = cryptogram.split("");

  let ranges = getRepeatedRanges(splitCrpyto);

  while (ranges.length) {
    ranges.forEach(([start, end]) => {
      changeCharacter(start, end, splitCrpyto);
    });
    splitCrpyto = splitCrpyto.filter((ch) => ch !== null);
    ranges = getRepeatedRanges(splitCrpyto);
  }
  return splitCrpyto.join("");
}
module.exports = problem2;

/**
 * @param {array} str
 * @returns {array}
 */
function getRepeatedRanges(str) {
  const results = [];

  for (let i = 0; i < str.length; i++) {
    const range = getRepeatedRange(i, str);
    if (range.length) results.push(range);
  }
  return results;
}

/**
 * @param {number} start 비교의 기준이 되는 색인 값
 * @param {string} str 모든 문자를 담고 있는 문자열
 * @returns {array} 같은 문자열의 시작과 끝의 인덱스가 담긴 배열
 */
function getRepeatedRange(start, str) {
  const result = [];
  const pivot = str[start];
  let continued = 0;

  for (let i = start + 1; i < str.length; i++) {
    const ch = str[i];

    //만약 pivot과 ch의 문자가 같다면
    if (ch === pivot) {
      continued++;
      continue;
    }
    //만약 다르다면
    //연속된 문자열이 존재하지 않는다면 빈배열 반환
    if (continued === 0) return [];
    result.push(start, start + continued);
    return result;
  }
  //만약에 문자열의 마지막까지 탐색하고도 함수가 return되지 않았더라면
  if (continued > 0) result.push(start, start + continued);
  return result;
}

/**
 * @param {number} start
 * @param {number} end
 * @param {array} str 원래 문자열
 */
function changeCharacter(start, end, str) {
  for (let i = start; i <= end; i++) {
    str[i] = null;
  }
}
