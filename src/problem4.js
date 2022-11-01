function problem4(word) {
  const table = getTransformTable();
  return getTransformedStr(word, table);
}

/**
 * PROBLEM4.md의 청개구리 사전에 맞춘 변환표를 반환한다.
 * @returns {object}
 */
function getTransformTable() {
  const alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
  const alphabetLarge = alphabetSmall.toUpperCase();
  const numOfAlphabets = alphabetSmall.length;
  const table = {};

  for (let i = 0; i < numOfAlphabets; i++) {
    table[alphabetSmall[i]] = alphabetSmall[numOfAlphabets - i - 1];
    table[alphabetLarge[i]] = alphabetLarge[numOfAlphabets - i - 1];
  }

  return table;
}

/**
 * 변환표에 맞춰 변환시킨 문자열을 반환한다.
 * @param {string} str 길이가 1 이상 1,000 이하
 * @return {string}
 */
function getTransformedStr(str, table) {
  let retStr = "";
  for (let i = 0; i < str.length; i++) {
    retStr += getTransformedChar(str[i], table);
  }
  return retStr;
}

/**
 * 변환표에 맞춰 변환시킨 문자열을 반환한다.
 * @param {string} char 길이가 1이다.
 * @return {string} 길이가 1이다.
 */
function getTransformedChar(char, table) {
  return table.hasOwnProperty(char) ? table[char] : char;
}

module.exports = problem4;
