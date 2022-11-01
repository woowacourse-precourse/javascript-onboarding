function convertStr(code) {
  const upperSumCode = 155;
  const lowerSumCode = 219;

  if (code >= 65 && code <= 90) return upperSumCode - code;
  if (code >= 97 && code <= 122) return lowerSumCode - code;

  return code;
}

function problem4(word) {
  const uniCodeArr = [...word]
    .map((char, idx) => word.charCodeAt(idx))
    .map(convertStr);
  return String.fromCharCode(...uniCodeArr);
}
module.exports = problem4;
