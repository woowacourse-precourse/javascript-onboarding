/**
 * 문자열을 받아 대문자가 없는지, 길이가 조건에 맞는지 확인한다
 * @param {string} checkString
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const isValidString = (checkString, min, max) => {
  // 길이 확인
  if (checkString.length > max || checkString.length < min) {
    return false;
  }
  // 알파벳 소문자 확인
  if (!/^[a-z]*$/.test(checkString)) {
    return false;
  }
  return true;
};

/**
 * 문자열에서 중복이 시작되는 문자의 위치와 그 길이를 반환한다.
 * @param {string} checkString
 * @returns {array} (start, length) 로 이루어진 배열을 반환한다.
 */
const getDuplicatedInfoList = (checkString) => {
  const result = []; // [(pos, length)]

  let before = checkString[0];
  let count = 1;
  let i = 1;
  for (i; i < checkString.length; i++) {
    // 다르다면 초기화
    if (before !== checkString[i]) {
      // 길이가 2 이상이라면 result에 push
      if (count >= 2) {
        result.push([i - count, count]);
      }
      count = 1;
      before = checkString[i];
    } else {
      // 같다면 count 증가
      count += 1;
    }
  }

  // 마지막 문자까지 같은 경우 비교가 안되기 떄문에 추가적으로 확인
  if (count >= 2) {
    result.push([i - count, count]);
  }
  return result;
};

module.exports = { isValidString, getDuplicatedInfoList };
