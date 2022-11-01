/**
 * 문자를 받아 청개구리 사전에 따라 변환
 * @param {char} origin
 * @returns char
 */
const changeChar = (origin) => {
  // 알파벳이 아니라면 변환하지 않는다.
  if (!/[A-Za-z]/.test(origin)) {
    return origin;
  }
  // 두 개의 문자를 더했을때 numForChangeWord가 나와야 한다
  const changeKey = 'A'.charCodeAt(0) + 'Z'.charCodeAt(0);

  // 일단 무조건 대문자로 변환하여 비교
  const upperOriginNum = origin.toUpperCase().charCodeAt();

  const changeUpper = String.fromCharCode(changeKey - upperOriginNum);

  if (origin.match(/[a-z]/)) {
    // 소문자라면 소문자 반환
    return changeUpper.toLowerCase();
  } else {
    // 그렇지 않다면 대문자 반환
    return changeUpper;
  }
};

module.exports = {
  changeChar,
};
